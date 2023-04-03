import React, { UIEvent } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { cn, useAppDispatch, useInitialEffect } from "shared/lib";
import { useInfiniteScroll } from "shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";
import { useThrottle } from "shared/lib/hooks/useThrottle";
import { selectScrollByUrl } from "../model/selectors/selectScrollByUrl";
import { rememberScrollActions } from "../model/slices/rememberScrollSlice/rememberScrollSlice";

import classes from "./PageWrapper.module.scss";

interface PageWrapperProps {
  className?: string;
  intersectionCallback?: () => void;
  error?: boolean;
}

export const PageWrapper: React.FC<PageWrapperProps> = (props) => {
  const { className, children, intersectionCallback, error } = props;
  const targetRef = React.useRef<HTMLDivElement>(
    null
  ) as React.MutableRefObject<HTMLDivElement>;
  const rootRef = React.useRef<HTMLDivElement>(
    null
  ) as React.MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const pageScroll = useSelector((state: StateSchema) =>
    selectScrollByUrl(state, pathname)
  );

  useInfiniteScroll({
    rootRef: rootRef,
    targetRef,
    callback: intersectionCallback,
  });

  useInitialEffect(() => {
    rootRef.current.scrollTop = pageScroll;
  });

  const handleScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(
      rememberScrollActions.setPageScroll({
        page: pathname,
        scroll: e.currentTarget.scrollTop,
      })
    );
  }, 300);

  return (
    <section
      ref={rootRef}
      className={cn(classes.PageWrapper, {}, [className])}
      onScroll={handleScroll}
    >
      {children}
      {error ? null : (
        <div ref={targetRef} className="intersection observer target"></div>
      )}
    </section>
  );
};

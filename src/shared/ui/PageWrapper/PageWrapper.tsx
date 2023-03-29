import React from "react";
import { cn } from "shared/lib";
import { useInfiniteScroll } from "shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";

import classes from "./PageWrapper.module.scss";

interface PageWrapperProps {
  className?: string;
  rootRef?: React.MutableRefObject<HTMLDivElement>;
  intersectionCallback?: () => void;
}

export const PageWrapper: React.FC<PageWrapperProps> = (props) => {
  const { className, children, rootRef, intersectionCallback } = props;
  const targetRef = React.useRef<HTMLDivElement>(
    null
  ) as React.MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({
    rootRef,
    targetRef,
    callback: intersectionCallback,
  });

  return (
    <div ref={rootRef} className={cn(classes.PageWrapper, {}, [className])}>
      {children}
      <div ref={targetRef} className="intersection observer target"></div>
    </div>
  );
};

import { MutableRefObject, useEffect } from "react";

interface UseInfiniteScrollArgs {
  rootRef: MutableRefObject<HTMLElement>;
  targetRef: MutableRefObject<HTMLElement>;
  callback?: () => void;
}

export const useInfiniteScroll = (args: UseInfiniteScrollArgs) => {
  const { targetRef, rootRef, callback } = args;
  useEffect(() => {
    let observer: IntersectionObserver | null;
    const targetElement = targetRef.current;
    const rootElement = rootRef.current;

    if (callback && targetElement) {
      const options: IntersectionObserverInit = {
        root: rootElement,
        rootMargin: "0px 0px 50px 0px",
        threshold: 0,
      };
      const cb: IntersectionObserverCallback = ([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      };
      observer = new IntersectionObserver(cb, options);
      observer.observe(targetElement);
    }

    return () => {
      if (observer) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(targetElement);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [callback]);
};

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useRef } from "react";

export const useThrottle = (
  callback: (...args: any) => void,
  delay: number
) => {
  const callbackInProcess = useRef(false);
  const timerRef = useRef<NodeJS.Timeout | null>();

  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current as NodeJS.Timeout);
    };
  }, []);

  return useCallback(
    (...args: any) => {
      if (!callbackInProcess.current) {
        callbackInProcess.current = true;
        callback(...args);

        timerRef.current = setTimeout(() => {
          callbackInProcess.current = false;
        }, delay);
      }
    },
    [callback, delay]
  );
};

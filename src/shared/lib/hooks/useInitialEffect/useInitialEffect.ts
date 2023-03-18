import React from "react";

export const useInitialEffect = (cb: () => void) => {
  React.useEffect(() => {
    if (__PROJECT__ !== "storybook") {
      cb();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

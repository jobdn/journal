import React from "react";

export const AboutPage = React.lazy(
  () =>
    new Promise((resolve) =>
      // eslint-disable-next-line
      //@ts-ignore
      setTimeout(() => resolve(import("./About")), 2000)
    )
);

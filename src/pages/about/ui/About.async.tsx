import React from "react";

export const AboutPage = React.lazy(
  () =>
    new Promise((resolve) =>
      //@ts-ignore
      setTimeout(() => resolve(import("./About")), 2000)
    )
);

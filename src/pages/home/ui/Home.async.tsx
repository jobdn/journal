import React from "react";

export const HomePage = React.lazy(
  () =>
    new Promise((resolve) =>
      //@ts-ignore
      setTimeout(() => resolve(import("./Home")), 2000)
    )
);

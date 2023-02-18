import React from "react";

export const HomePage = React.lazy(
  () =>
    new Promise((resolve) => setTimeout(() => resolve(import("./Home")), 2000))
);

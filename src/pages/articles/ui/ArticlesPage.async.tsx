import { lazy } from "react";

export const ArticlesPage = lazy(
  () =>
    new Promise((res) => {
      // @ts-ignore
      setTimeout(() => res(import("./ArticlesPage")), 1000);
    })
);

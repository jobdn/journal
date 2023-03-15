import React from "react";

export const DetailedArticlePage = React.lazy(
  () =>
    new Promise((resolve) =>
      //@ts-ignore
      setTimeout(() => resolve(import("./DetailedArticlePage")), 2000)
    )
);

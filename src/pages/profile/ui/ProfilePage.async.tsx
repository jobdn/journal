import React from "react";

export const ProfilePage = React.lazy(
  () =>
    new Promise((resolve) =>
      //@ts-ignore
      setTimeout(() => resolve(import("./ProfilePage")), 2000)
    )
);

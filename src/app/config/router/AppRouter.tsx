import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { AppLoader } from "widgets/AppLoader";
import { selectUserData } from "entities/User";

import { routes } from "./routesConfig";

export const AppRouter = () => {
  const isAuth = useSelector(selectUserData);

  const availableRoutes = React.useMemo(
    () =>
      Object.values(routes).filter((route) => {
        if (route.authOnly && !isAuth) return false;

        return true;
      }),
    [isAuth]
  );

  return (
    <div className="page-wrapper">
      <React.Suspense fallback={<AppLoader />}>
        <Routes>
          {availableRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </React.Suspense>
    </div>
  );
};

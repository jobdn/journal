import React from "react";
import { Route, Routes } from "react-router-dom";

import { AppLoader } from "widgets/AppLoader";

import { CustomRouteProps, routes } from "./routesConfig";
import { RequireAuth } from "./RequireAuth";

export const AppRouter = () => {
  const authWrapper = React.useCallback((route: CustomRouteProps) => {
    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.authOnly ? (
            <RequireAuth>{route.element}</RequireAuth>
          ) : (
            route.element
          )
        }
      />
    );
  }, []);

  return (
    <div className="page-wrapper">
      <React.Suspense fallback={<AppLoader />}>
        <Routes>{Object.values(routes).map(authWrapper)}</Routes>
      </React.Suspense>
    </div>
  );
};

import React from "react";
import { Route, Routes } from "react-router-dom";

import { AppLoader } from "widgets/AppLoader";

import { CustomRouteProps, routes } from "./routesConfig";
import { RequireAuth } from "./RequireAuth";
import { RequireRoles } from "./RequireRoles";

export const AppRouter = () => {
  const authWrapper = React.useCallback((route: CustomRouteProps) => {
    if (route.authOnly) {
      return (
        <Route
          key={route.path}
          path={route.path}
          element={
            <RequireAuth>
              {route.roles ? (
                <RequireRoles roles={route.roles}>{route.element}</RequireRoles>
              ) : (
                route.element
              )}
            </RequireAuth>
          }
        />
      );
    }

    return <Route key={route.path} path={route.path} element={route.element} />;
  }, []);

  return (
    <React.Suspense fallback={<AppLoader />}>
      <Routes>{Object.values(routes).map(authWrapper)}</Routes>
    </React.Suspense>
  );
};

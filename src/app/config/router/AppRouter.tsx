import React from "react";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";
import { AppLoader } from "widgets/AppLoader";

import { routes } from "./routesConfig";

export const AppRouter = () => {
  const { t } = useTranslation();
  return (
    <div className="page-wrapper">
      <React.Suspense fallback={<AppLoader />}>
        <Routes>
          {Object.values(routes).map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </React.Suspense>
    </div>
  );
};

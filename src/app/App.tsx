import React from "react";

import { AppRouter } from "./config/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { useAppDispatch } from "shared/lib";
import { userActions } from "entities/User";

export const App = () => {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(userActions.checkAuth());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app">
      <React.Suspense fallback="">
        <Navbar />
        <div className="page-content">
          <Sidebar />
          <AppRouter />
        </div>
      </React.Suspense>
    </div>
  );
};

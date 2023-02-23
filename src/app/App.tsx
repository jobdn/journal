import React from "react";

import { AppRouter } from "./config/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

export const App = () => {
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

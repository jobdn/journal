import React from "react";

import { AppRouter } from "./config/router";
import { useTheme } from "shared/config/theme";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { cn } from "shared/lib";

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={cn("app", {}, [theme])}>
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

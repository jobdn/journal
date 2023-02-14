import React from "react";

import { AppRouter } from "./config/router";
import { useTheme } from "shared/config/theme";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { cn } from "shared/lib/classNames";

export const App = () => {
  const { theme } = useTheme();

  React.useEffect(() => {
    if (Math.random() < 0.5) {
      throw new Error("!!!!!!");
    }
  }, []);

  return (
    <div className={cn("app", {}, [theme])}>
      <React.Suspense fallback="">
        {/* 👆 Suspence for i18n */}
        <Navbar />
        <div className="page-content">
          <Sidebar />
          <AppRouter />
        </div>
      </React.Suspense>
    </div>
  );
};

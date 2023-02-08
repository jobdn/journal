import { AppRouter } from "./providers/router";

import { useTheme } from "shared/config/theme";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

export const App = () => {
  const { theme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <div className="page-content">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};

import { AppRouter } from "./providers/routers";

import { useTheme } from "shared/config/theme";
import { Navbar } from "widgets/Navbar";

export const App = () => {
  const { theme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <AppRouter />
    </div>
  );
};

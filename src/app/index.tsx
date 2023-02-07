import { AppRouter } from "./providers/routers";

import { useTheme } from "shared/config/theme";
import { Navbar } from "widgets/Navbar";

export const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>TOGGLE THEME</button>
      <Navbar />
      <AppRouter />
    </div>
  );
};

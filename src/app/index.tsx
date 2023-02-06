import { NavLink } from "react-router-dom";

import { AppRouter } from "./providers/routers";

import { useTheme } from "shared/config/theme";

export const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>TOGGLE THEME</button>
      <nav>
        <NavLink to={"/home"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/"}>MAIN</NavLink>
        <AppRouter />
      </nav>
    </div>
  );
};

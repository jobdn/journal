import React from "react";
import { Theme } from "../types/Theme";
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from "../types/ThemeContext";

const defaultTheme: Theme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = React.useState<Theme>(defaultTheme);

  console.log("***********", theme);

  const defaultThemeContextValue = React.useMemo(
    () => ({ theme, setTheme }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={defaultThemeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

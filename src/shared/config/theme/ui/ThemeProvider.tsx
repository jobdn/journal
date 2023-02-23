import React from "react";
import { Theme } from "../types/Theme";
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from "../types/ThemeContext";

const defaultTheme: Theme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

interface ThemeProviderProps {
  initialTheme?: Theme;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const { children, initialTheme } = props;
  const [theme, setTheme] = React.useState<Theme>(initialTheme || defaultTheme);

  const themeValue = React.useMemo(() => ({ theme, setTheme }), [theme]);

  document.body.className = theme;

  return (
    <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>
  );
};

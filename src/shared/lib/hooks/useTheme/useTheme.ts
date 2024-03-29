import React from "react";
import { LOCAL_STORAGE_THEME_KEY } from "shared/constants/localStorage";
import { ThemeContext, Theme, UseThemeReturned } from "shared/config/theme";

export const useTheme = (): UseThemeReturned => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme?.(newTheme);
    document.body.className = newTheme;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme: theme || Theme.LIGHT, toggleTheme };
};

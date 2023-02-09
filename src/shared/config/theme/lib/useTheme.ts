import React from "react";
import { Theme } from "../types/Theme";
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from "../types/ThemeContext";
import { UseThemeReturned } from "../types/UseThemeReturned";

export const useTheme = (): UseThemeReturned => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme(newTheme);

    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme, toggleTheme };
};

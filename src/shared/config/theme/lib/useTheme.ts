import React from "react";
import { Theme } from "../model/Theme";
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from "../model/ThemeContext";
import { UseThemeReturned } from "../model/UseThemeReturned";

export const useTheme = (): UseThemeReturned => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    console.log(newTheme);
    setTheme(newTheme);

    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme, toggleTheme };
};

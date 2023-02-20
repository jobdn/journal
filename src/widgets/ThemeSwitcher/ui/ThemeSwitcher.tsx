import React from "react";
import { useTranslation } from "react-i18next";

import { Theme, useTheme } from "shared/config/theme";
import { Button, ButtonThemes } from "shared/ui/Button";

import DarkThemeSwitcher from "../assets/dark-theme-switcher.svg";
import LightThemeSwitcher from "../assets/light-theme-switcher.svg";

import classes from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <Button
      className={classes.ThemeSwitcher}
      onClick={toggleTheme}
      type="button"
      theme={ButtonThemes.CLEAR}
      title={t("sidebar.titles.theme")}
    >
      {theme === Theme.DARK ? <LightThemeSwitcher /> : <DarkThemeSwitcher />}
    </Button>
  );
};

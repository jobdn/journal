import React from "react";
import i18next from "i18next";

import { cn } from "shared/lib/classNames";
import { Button, ButtonThemes } from "shared/ui/Button";

import classes from "./LangSwitcher.module.scss";

import ChangeLang from "../assets/change-lang.svg";
import { Theme, useTheme } from "shared/config/theme";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: React.FC<LangSwitcherProps> = ({ className }) => {
  const handleLangToggle = () =>
    i18next.changeLanguage(i18next.language === "ru" ? "en" : "ru");
  const { theme } = useTheme();
  const buttonTheme = React.useMemo(
    () => (theme === Theme.DARK ? ButtonThemes.CLEAR : ButtonThemes.FILLED),
    [theme]
  );
  return (
    <Button
      theme={buttonTheme}
      className={cn(classes.LangSwitcher, {}, [className])}
      onClick={handleLangToggle}
    >
      <ChangeLang />
    </Button>
  );
};

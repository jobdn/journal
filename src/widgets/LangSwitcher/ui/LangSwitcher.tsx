import React from "react";
import i18next from "i18next";

import { cn } from "shared/lib";
import { Button, ButtonThemes } from "shared/ui/Button";
import { useTranslation } from "react-i18next";

import classes from "./LangSwitcher.module.scss";

import ChangeLang from "../assets/change-lang.svg";
import { Theme, useTheme } from "shared/config/theme";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: React.FC<LangSwitcherProps> = ({ className }) => {
  const { t } = useTranslation();
  const handleLangToggle = async () =>
    i18next.changeLanguage(i18next.language === "ru" ? "en" : "ru");
  const { theme } = useTheme();

  const buttonTheme = React.useMemo(
    () => (theme === Theme.DARK ? ButtonThemes.CLEAR : ButtonThemes.FILLED),
    [theme]
  );

  return (
    // TODO: Почему кнопка черна в темной теме сторибука?
    <Button
      theme={buttonTheme}
      className={cn(classes.LangSwitcher, {}, [className])}
      onClick={handleLangToggle}
      title={t("sidebar.titles.lang")}
    >
      <ChangeLang />
    </Button>
  );
};

import React from "react";
import i18next from "i18next";

import { cn } from "shared/lib";
import { Button, ButtonVariant } from "shared/ui/Button";
import { useTranslation } from "react-i18next";

import classes from "./LangSwitcher.module.scss";

import ChangeLang from "../assets/change-lang.svg";
import { Theme, useTheme } from "shared/config/theme";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: React.FC<LangSwitcherProps> = React.memo(
  function LangSwitcher({ className }) {
    const { t } = useTranslation();
    const handleLangToggle = async () =>
      i18next.changeLanguage(i18next.language === "ru" ? "en" : "ru");
    const { theme } = useTheme();

    const buttonVariant = React.useMemo(
      () => (theme === Theme.DARK ? ButtonVariant.CLEAR : ButtonVariant.FILLED),
      [theme]
    );

    return (
      // TODO: Почему кнопка черна в темной теме сторибука?
      <Button
        variant={buttonVariant}
        className={cn(classes.LangSwitcher, {}, [className])}
        onClick={handleLangToggle}
        title={t("sidebar.titles.lang")}
      >
        <ChangeLang />
      </Button>
    );
  }
);

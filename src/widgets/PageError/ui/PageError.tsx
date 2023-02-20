import React from "react";
import { cn } from "shared/lib";

import classes from "./PageError.module.scss";

import ErrorBoundaryGif from "../assets/error.gif";
import { Button } from "shared/ui/Button";
import { useTranslation } from "react-i18next";

interface PageErrorProps {
  className?: string;
}

export const PageError: React.FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation();
  const handleReload: React.MouseEventHandler<HTMLButtonElement> = () => {
    location.reload();
  };

  return (
    <div className={cn(classes.PageError, {}, [className])}>
      <img src={ErrorBoundaryGif} alt="Error placeholder" />
      <Button onClick={handleReload}>{t("page-error")} </Button>
    </div>
  );
};

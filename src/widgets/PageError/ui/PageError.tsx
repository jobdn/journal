import React from "react";
import { cn } from "shared/lib";

import classes from "./PageError.module.scss";

import ErrorBoundaryGif from "../assets/error.gif";
import { Button, ButtonVariant } from "shared/ui/Button";
import { useTranslation } from "react-i18next";

interface PageErrorProps {
  className?: string;
  errorMessage?: string;
}

export const PageError: React.FC<PageErrorProps> = ({
  className,
  errorMessage,
}) => {
  const { t } = useTranslation();
  const handleReload: React.MouseEventHandler<HTMLButtonElement> = () => {
    location.reload();
  };

  return (
    <div className={cn(classes.PageError, {}, [className])}>
      <img src={ErrorBoundaryGif} alt="Error placeholder" />
      <Button onClick={handleReload} variant={ButtonVariant.FILLED_INVERTED}>
        {errorMessage || t("error.page-error")}
      </Button>
    </div>
  );
};

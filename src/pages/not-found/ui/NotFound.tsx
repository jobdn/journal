import React from "react";
import { cn } from "shared/lib";

import classes from "./NotFound.module.scss";

import NotFoundGif from "../assets/not-found.gif";
import { useTranslation } from "react-i18next";

interface NotFoundProps {
  className?: string;
}

const NotFoundPage: React.FC<NotFoundProps> = ({ className }) => {
  const { t } = useTranslation("not-found");
  return (
    <div className={cn(classes.NotFoundPage, {}, [className])}>
      <h1 className={classes.title}>{t("not-found")}</h1>
      <img
        src={NotFoundGif}
        className={classes.notFoundImg}
        alt="There is not page"
      />
    </div>
  );
};

export default NotFoundPage;

import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { cn } from "shared/lib";
import { AvailableRoutes } from "shared/config/router";
import { AppLink } from "shared/ui/AppLink";
import { Button, ButtonVariant } from "shared/ui/Button";

import classes from "./DetailedArticlePageHeader.module.scss";
import { selectCanEdit } from "../../model/selectors/detailedArticlePage/selectCanEdit";

interface DetailedArticlePageHeaderProps {
  className?: string;
}

export const DetailedArticlePageHeader: React.FC<
  DetailedArticlePageHeaderProps
> = ({ className }) => {
  const { t } = useTranslation();

  const { id } = useParams<{ id: string }>();
  const canEdit = useSelector(selectCanEdit);

  return (
    <div className={cn(classes.DetailedArticlePageHeader, {}, [className])}>
      <AppLink to={`/${AvailableRoutes.ARTICLES}`}>
        <Button variant={ButtonVariant.OUTLINED}>{t("go_back")}</Button>
      </AppLink>
      {canEdit && (
        <AppLink
          to={`/${AvailableRoutes.ARTICLES}/${id}/${AvailableRoutes.EDIT_ARTICLE}`}
          className={classes.edit}
        >
          <Button variant={ButtonVariant.OUTLINED}>{t("edit")}</Button>
        </AppLink>
      )}
    </div>
  );
};

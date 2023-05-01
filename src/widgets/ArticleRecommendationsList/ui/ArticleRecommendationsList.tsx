import React from "react";
import { useTranslation } from "react-i18next";
import { cn } from "shared/lib";

import classes from "./ArticleRecommendationsList.module.scss";
import { Text } from "shared/ui/Text";
import { ArticleList } from "entities/Article";
import { useFetchArticleRecommendationsQuery } from "../api/articleRecommendationsListApi";

interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList: React.FC<
  ArticleRecommendationsListProps
> = ({ className }) => {
  const { t } = useTranslation("detailed-article");
  const {
    data: recommendations,
    isError,
    isLoading,
  } = useFetchArticleRecommendationsQuery(4);

  return (
    <div className={cn(classes.ArticleRecommendationsList, {}, [className])}>
      <Text title={t("recommendations_title")} className={classes.title} />
      <ArticleList
        className={classes.recommendations}
        isLoading={isLoading}
        error={isError ? t("recommendations-error") : ""}
        articleList={recommendations}
        view="tile"
        target="_blank"
      />
    </div>
  );
};

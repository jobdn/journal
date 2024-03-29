import React, { HTMLAttributeAnchorTarget } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "shared/lib";
import { Text } from "shared/ui/Text";

import { Article, ArticleListView } from "../../types/Article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";

import classes from "./ArticleList.module.scss";

interface ArticleListProps {
  className?: string;
  articleList?: Article[];
  view: ArticleListView;
  isLoading?: boolean;
  error?: string;
  target?: HTMLAttributeAnchorTarget;
}

const renderListSkeleton = (view: ArticleListView) =>
  Array(view === "list" ? 3 : 6)
    .fill(1)
    .map((_, i) => (
      <ArticleListItemSkeleton key={i} view={view} className={classes.item} />
    ));

export const ArticleList: React.FC<ArticleListProps> = (props) => {
  const { t } = useTranslation();
  const {
    className,
    articleList,
    view = "list",
    isLoading,
    error,
    target,
  } = props;

  const renderArticleList = React.useCallback(
    (article: Article) => (
      <ArticleListItem
        key={article.id}
        article={article}
        view={view}
        className={classes.item}
        target={target}
      />
    ),
    [view, target]
  );

  if (error) return <Text title={error} variant="error" align="center" />;

  if (isLoading)
    return (
      <div className={cn(classes.ArticleList, {}, [className, classes[view]])}>
        {renderListSkeleton(view)}
      </div>
    );

  if (!articleList?.length && !isLoading)
    return <Text title={t("empty.articles")} align="center" />;

  return (
    <div className={cn(classes.ArticleList, {}, [className, classes[view]])}>
      {articleList?.map(renderArticleList)}
      {isLoading && renderListSkeleton(view)}
    </div>
  );
};

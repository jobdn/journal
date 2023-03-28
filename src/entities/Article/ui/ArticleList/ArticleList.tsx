import React from "react";
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
}

const renderListSkeleton = (view: ArticleListView) =>
  Array(view === "list" ? 9 : 3)
    .fill(1)
    .map((_, i) => <ArticleListItemSkeleton key={i} view={view} />);

export const ArticleList: React.FC<ArticleListProps> = (props) => {
  const { t } = useTranslation();
  const { className, articleList, view = "list", isLoading, error } = props;

  const renderArticleList = React.useCallback(
    (article: Article) => (
      <ArticleListItem key={article.id} article={article} view={view} />
    ),
    [view]
  );

  if (error) return <Text title={error} variant="error" align="center" />;

  if (isLoading) {
    return (
      <div className={cn(classes.ArticleList, {}, [className, classes[view]])}>
        {renderListSkeleton(view)}
      </div>
    );
  }

  if (!articleList?.length) return <Text text="Empty article list" />;

  return (
    <div className={cn(classes.ArticleList, {}, [className, classes[view]])}>
      {articleList.map(renderArticleList)}
    </div>
  );
};

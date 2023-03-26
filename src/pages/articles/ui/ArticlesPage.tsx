import React from "react";
import { useTranslation } from "react-i18next";

import { cn } from "shared/lib";
import { article, ArticleList } from "entities/Article";

import classes from "./ArticlesPage.module.scss";

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage: React.FC<ArticlesPageProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={cn(classes.ArticlesPage, {}, [className])}>
      <ArticleList
        articleList={Array(100)
          .fill(0)
          .map((_, index) => ({ ...article, id: String(index) }))}
        view="list"
        isLoading={true}
      />
    </div>
  );
};

export default ArticlesPage;

import React from "react";
import { useTranslation } from "react-i18next";
import { cn } from "shared/lib";

import classes from "./ArticlesPage.module.scss";

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage: React.FC<ArticlesPageProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={cn(classes.ArticlesPage, {}, [className])}>ARTICLES</div>
  );
};

export default ArticlesPage;

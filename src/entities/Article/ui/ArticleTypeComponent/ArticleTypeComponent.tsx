import React from "react";
import { cn } from "shared/lib";

import classes from "./ArticleTypeComponent.module.scss";
import { ArticleType } from "../../types/Article";

interface ArticleTypeComponentProps {
  className?: string;
  articleType: ArticleType;
}

export const ArticleTypeComponent: React.FC<ArticleTypeComponentProps> = ({
  className,
  articleType,
}) => {
  return (
    <div className={cn(classes.ArticleTypeComponent, {}, [className])}>
      {articleType}
    </div>
  );
};

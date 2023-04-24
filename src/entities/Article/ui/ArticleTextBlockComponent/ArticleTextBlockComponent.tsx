import { ArticleTextBlock } from "../../types/Article";
import React from "react";
import { cn } from "shared/lib";
import { Text } from "shared/ui/Text";

import classes from "./ArticleTextBlockComponent.module.scss";

interface ArticleTextBlockComponentProps extends Partial<ArticleTextBlock> {
  className?: string;
}

export const ArticleTextBlockComponent: React.FC<
  ArticleTextBlockComponentProps
> = (props) => {
  const { className, title, paragraphs } = props;
  return (
    <div className={cn(classes.ArticleTextBlockComponent, {}, [className])}>
      {title && <Text title={title} className={classes.title} />}
      {paragraphs?.length && paragraphs.map((p) => <Text key={p} text={p} />)}
    </div>
  );
};

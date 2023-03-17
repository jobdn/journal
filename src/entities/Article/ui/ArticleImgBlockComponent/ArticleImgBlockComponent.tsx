import React from "react";
import { cn } from "shared/lib";

import classes from "./ArticleImgBlockComponent.module.scss";
import { ArticleImageBlock } from "../../types/Article";
import { Text } from "shared/ui/Text";

interface ArticleImgBlockComponentProps extends Partial<ArticleImageBlock> {
  className?: string;
}

export const ArticleImgBlockComponent: React.FC<ArticleImgBlockComponentProps> =
  (props) => {
    const { className, src, title } = props;

    return (
      <div className={cn(classes.ArticleImgBlockComponent, {}, [className])}>
        <img src={src} alt="Text article block" className={classes.img} />
        {title && <Text text={title} align="center" />}
      </div>
    );
  };

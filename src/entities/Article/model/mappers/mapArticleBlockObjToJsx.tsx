import { ArticleImgBlockComponent } from "../../ui/ArticleImgBlockComponent/ArticleImgBlockComponent";
import { ArticleCodeBlockComponent } from "../../ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import { ArticleTextBlockComponent } from "../../ui/ArticleTextBlockComponent/ArticleTextBlockComponent";

import { ArticleBlock, ArticleBlockType } from "../../types/Article";

import classes from "../../ui/DetailedArticle/DetailedArticle.module.scss";

export const mapArticleBlockObjToJsx = (block: ArticleBlock) => {
  switch (block.type) {
    case ArticleBlockType.IMAGE:
      return (
        <ArticleImgBlockComponent
          className={classes.text}
          key={block.id}
          src={block.src}
          title={block.title}
        />
      );
    case ArticleBlockType.CODE:
      return (
        <ArticleCodeBlockComponent
          className={classes.text}
          key={block.id}
          code={block.code}
        />
      );
    case ArticleBlockType.TEXT:
      return (
        <ArticleTextBlockComponent
          className={classes.text}
          key={block.id}
          paragraphs={block.paragraphs}
          title={block.title}
        />
      );

    default:
      null;
  }
};

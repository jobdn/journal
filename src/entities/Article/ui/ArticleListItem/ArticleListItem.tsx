import React from "react";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid";

import { cn } from "shared/lib";
import EyeIcon from "shared/assets/svg/eye.svg";

import classes from "./ArticleListItem.module.scss";

import {
  Article,
  ArticleBlockType,
  ArticleListView,
  ArticleTextBlock,
  ArticleTopic,
} from "../../types/Article";
import { ArticleTypeComponent } from "../ArticleTypeComponent/ArticleTypeComponent";
import { Text } from "shared/ui/Text";
import { AppLink } from "shared/ui/AppLink";
import { AvailableRoutes } from "shared/config/router";
import { Card } from "shared/ui/Card";
import { Button, ButtonVariant } from "shared/ui/Button";
import { Avatar } from "shared/ui/Avatar";
import i18next from "i18next";

interface ArticleListItemProps {
  className?: string;
  view: ArticleListView;
  article: Article;
}

export const ArticleListItem: React.FC<ArticleListItemProps> = React.memo(
  function ArticleListItem(props) {
    const { className, article, view } = props;
    const { t } = useTranslation("detailed-article");

    const renderArticleTopic = React.useCallback(
      (type: ArticleTopic) => (
        <ArticleTypeComponent
          key={uuidv4()}
          articleType={t(type, { ns: "articles" })}
        />
      ),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [i18next.language]
    );

    const articleTopics = React.useMemo(() => {
      return article.type.map(renderArticleTopic);
    }, [article.type, renderArticleTopic]);

    if (view === "list") {
      const firstTextBlock: ArticleTextBlock | undefined = article.blocks.find(
        (block) => block.type === ArticleBlockType.TEXT
      ) as ArticleTextBlock;

      return (
        <div
          className={cn(classes.ArticleListItem, {}, [
            className,
            classes[view],
          ])}
        >
          <Card>
            <div className={classes.mainInfo}>
              <div className={classes.author}>
                <Avatar
                  src={article.user.avatar || ""}
                  alt="Article author"
                  variant="circle"
                  size={30}
                />
                <span>{article.user.username}</span>
              </div>
              <span className={classes.createdAt}>{article.createdAt}</span>
            </div>
            <div className={classes.hero}>
              <img
                src={article.img}
                alt="Article hero"
                className={classes.img}
              />
            </div>

            <div className={classes.articleTypes}>{articleTopics}</div>
            <Text title={article.title} titleClassName={classes.title} />
            {firstTextBlock && (
              <Text
                className={classes.snippet}
                text={firstTextBlock.paragraphs[0]}
              />
            )}

            <div className={classes.footer}>
              <AppLink to={`/${AvailableRoutes.ARTICLES}/${article.id}`}>
                <Button variant={ButtonVariant.FILLED}>{t("read_more")}</Button>
              </AppLink>
              <div className={classes.stats}>
                <EyeIcon className="icon" />
                <div className={classes.views}>{article.views}</div>
              </div>
            </div>
          </Card>
        </div>
      );
    }

    return (
      <AppLink
        to={`/${AvailableRoutes.ARTICLES}/${article.id}`}
        className={cn(classes.ArticleListItem, {}, [className, classes[view]])}
      >
        <Card className={classes.card}>
          <div className={classes.hero}>
            <img src={article.img} alt="Article hero" className={classes.img} />
            <span className={classes.createdAt}>{article.createdAt}</span>
          </div>

          <div className={classes.info}>
            <div className={classes.articleTypes}>{articleTopics}</div>

            <div className={classes.stats}>
              <EyeIcon className="icon" />
              <div className={classes.views}>{article.views}</div>
            </div>
          </div>
          <Text title={article.title} titleClassName={classes.title} />
        </Card>
      </AppLink>
    );
  }
);

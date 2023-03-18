import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  cn,
  DynamicLoadingReducer,
  useAppDispatch,
  AsyncReducers,
} from "shared/lib";
import { Text } from "shared/ui/Text";

import classes from "./DetailedArticle.module.scss";
import { CommentList } from "entities/Comment";
import { DetailedArticle, selectDetailedArticleData } from "entities/Article";

import {
  articleCommentsReducer,
  articleCommentsSelectors,
} from "../model/articleCommentsSlice";
import {
  selectArticleCommentsError,
  selectArticleCommentsIsLoading,
} from "../model/selectors/articleCommentsSelectors/selectArticleComments";
import { fetchArticleComments } from "../model/service/fetchArticleComments";

interface DetailedArticleProps {
  className?: string;
}

const commentListReducer: AsyncReducers = {
  articleComments: articleCommentsReducer,
};

const DetailedArticlePage: React.FC<DetailedArticleProps> = ({ className }) => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation("detailed-article");
  const dispatch = useAppDispatch();
  const comments = useSelector(articleCommentsSelectors.selectAll);
  const article = useSelector(selectDetailedArticleData);
  const commentsIsLoading = useSelector(selectArticleCommentsIsLoading);
  const commentsRequestError = useSelector(selectArticleCommentsError);
  const commentsTitleRef = React.useRef<HTMLDivElement>(null);
  const commentsIsVisible = React.useRef(false);

  React.useEffect(() => {
    if (!commentsTitleRef.current) return;

    const commentObserver = new IntersectionObserver(
      ([entry], observer) => {
        if (entry.isIntersecting) {
          if (__PROJECT__ !== "storybook") {
            dispatch(fetchArticleComments(id));
          }
          commentsIsVisible.current = true;

          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "100px 0px" }
    );

    commentObserver.observe(commentsTitleRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [article]);

  if (!id) {
    return (
      <Text
        title={t("error.page-error", { ns: "translations" })}
        variant="error"
        align="center"
      />
    );
  }

  return (
    <div className={cn("", {}, [className])}>
      <DetailedArticle id={id} />
      {article ? (
        <DynamicLoadingReducer reducers={commentListReducer}>
          <Text
            title={t("comments-title")}
            className={classes.title}
            ref={commentsTitleRef}
          />
          <CommentList
            commentList={comments}
            isLoading={commentsIsLoading}
            error={commentsRequestError}
            itemClassName={classes.comment}
          />
        </DynamicLoadingReducer>
      ) : null}
    </div>
  );
};

export default DetailedArticlePage;

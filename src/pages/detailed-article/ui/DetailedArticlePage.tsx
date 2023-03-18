import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  cn,
  DynamicLoadingReducer,
  useAppDispatch,
  useInitialEffect,
  AsyncReducers,
} from "shared/lib";
import { Text } from "shared/ui/Text";

import classes from "./DetailedArticle.module.scss";
import { CommentList } from "entities/Comment";
import { DetailedArticle } from "entities/Article";

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

const asyncReducer: AsyncReducers = { articleComments: articleCommentsReducer };

const DetailedArticlePage: React.FC<DetailedArticleProps> = ({ className }) => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation("detailed-article");
  const dispatch = useAppDispatch();
  const comments = useSelector(articleCommentsSelectors.selectAll);
  const commentsIsLoading = useSelector(selectArticleCommentsIsLoading);
  const commentsRequestError = useSelector(selectArticleCommentsError);

  useInitialEffect(() => {
    id && dispatch(fetchArticleComments(id));
  });

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
    <DynamicLoadingReducer reducers={asyncReducer}>
      <div className={cn("", {}, [className])}>
        <DetailedArticle id={id} />
        {!commentsRequestError && (
          <>
            <Text title={t("comments-title")} className={classes.title} />
            <CommentList
              commentList={comments}
              isLoading={commentsIsLoading}
              error={commentsRequestError}
              itemClassName={classes.comment}
            />
          </>
        )}
      </div>
    </DynamicLoadingReducer>
  );
};

export default DetailedArticlePage;

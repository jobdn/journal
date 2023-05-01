import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  DynamicLoadingReducer,
  useAppDispatch,
  AsyncReducers,
} from "shared/lib";
import { Text } from "shared/ui/Text";

import classes from "./DetailedArticlePage.module.scss";

import { AddComment, addCommentReducer } from "features/AddComment";
import { CommentList } from "entities/Comment";
import { DetailedArticle, selectDetailedArticleData } from "entities/Article";
import { PageWrapper } from "widgets/PageWrapper";

import { articleCommentsSelectors } from "../../model/slices/articleCommentsSlice";
import {
  selectArticleCommentsError,
  selectArticleCommentsIsLoading,
} from "../../model/selectors/articleCommentsSelectors/selectArticleComments";
import { addArticleComment } from "../../model/services/addArticleComment/addArticleComment";
import { detailedArticlePageReducer } from "../../model/slices";
import { DetailedArticlePageHeader } from "../DetailedArticlePageHeader/DetailedArticlePageHeader";
import { ArticleRecommendationsList } from "widgets/ArticleRecommendationsList";

interface DetailedArticlePageProps {
  className?: string;
}

const lazyReducers: AsyncReducers = {
  addComment: addCommentReducer,
  detailedArticlePage: detailedArticlePageReducer,
};

const DetailedArticlePage: React.FC<DetailedArticlePageProps> = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation("detailed-article");
  const dispatch = useAppDispatch();
  const article = useSelector(selectDetailedArticleData);

  const comments = useSelector(articleCommentsSelectors.selectAll);
  const commentsIsLoading = useSelector(selectArticleCommentsIsLoading);
  const commentsError = useSelector(selectArticleCommentsError);
  const commentsTitleRef = React.useRef<HTMLDivElement>(null);

  const handleArticleCommentSend = React.useCallback(
    (comment: string) => {
      dispatch(addArticleComment(comment));
    },
    [dispatch]
  );

  if (!id) {
    return (
      <Text
        title={t("error.page-error", { ns: "translation" })}
        variant="error"
        align="center"
      />
    );
  }

  return (
    <PageWrapper>
      <DetailedArticlePageHeader />
      <DetailedArticle id={id} />
      <ArticleRecommendationsList />
      {article ? (
        <DynamicLoadingReducer
          reducers={lazyReducers}
          removeAfterUnmount={false}
        >
          <Text
            title={t("comments-title")}
            className={classes.title}
            ref={commentsTitleRef}
          />
          <AddComment onSendComment={handleArticleCommentSend} />
          <CommentList
            commentList={comments}
            isLoading={commentsIsLoading}
            error={commentsError}
          />
        </DynamicLoadingReducer>
      ) : null}
    </PageWrapper>
  );
};

export default DetailedArticlePage;

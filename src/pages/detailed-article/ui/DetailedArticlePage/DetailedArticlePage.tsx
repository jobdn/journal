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
import {
  ArticleList,
  DetailedArticle,
  selectDetailedArticleData,
} from "entities/Article";
import { PageWrapper } from "widgets/PageWrapper";

import { articleCommentsSelectors } from "../../model/slices/articleCommentsSlice";
import {
  selectArticleCommentsError,
  selectArticleCommentsIsLoading,
} from "../../model/selectors/articleCommentsSelectors/selectArticleComments";
import { addArticleComment } from "../../model/services/addArticleComment/addArticleComment";
import { fetchArticleComments } from "../../model/services/fetchArticleComments/fetchArticleComments";

import { fetchArticleRecommendations } from "../../model/services/fetchArticleRecommendations/fetchArticleRecommendations";
import { articleRecommendationsSelectors } from "../../model/slices/articleRecommendationsSlice";
import {
  selectArticleRecommendationsError,
  selectArticleRecommendationsIsLoading,
} from "../../model/selectors/articleRecommendationsSelectors/selectArticleRecommendations";
import { detailedArticlePageReducer } from "../../model/slices";
import { DetailedArticlePageHeader } from "../DetailedArticlePageHeader/DetailedArticlePageHeader";

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

  const recommendations = useSelector(
    articleRecommendationsSelectors.selectAll
  );
  const recommendationsIsLoading = useSelector(
    selectArticleRecommendationsIsLoading
  );
  const recommendationsError = useSelector(selectArticleRecommendationsError);
  const recommendationsTitleRef = React.useRef<HTMLDivElement | null>(null);

  const comments = useSelector(articleCommentsSelectors.selectAll);
  const commentsIsLoading = useSelector(selectArticleCommentsIsLoading);
  const commentsError = useSelector(selectArticleCommentsError);
  const commentsTitleRef = React.useRef<HTMLDivElement>(null);
  const commentsIsVisible = React.useRef(false);

  React.useEffect(() => {
    if (!commentsTitleRef.current) return;

    const commentObserver = new IntersectionObserver(
      ([entry], observer) => {
        // TODO: this logic a bit like in PageWrapper
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
    dispatch(fetchArticleRecommendations());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [article]);

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
      {article ? (
        <DynamicLoadingReducer
          reducers={lazyReducers}
          removeAfterUnmount={false}
        >
          <Text
            title={t("recommendations-title")}
            className={classes.title}
            ref={recommendationsTitleRef}
          />
          <ArticleList
            className={classes.recommendations}
            isLoading={recommendationsIsLoading}
            error={recommendationsError}
            articleList={recommendations}
            view="tile"
            target="_blank"
          />
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

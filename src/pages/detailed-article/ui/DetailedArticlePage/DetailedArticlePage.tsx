import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import { Text } from "shared/ui/Text";

import { DetailedArticle } from "entities/Article";
import { PageWrapper } from "widgets/PageWrapper";

import { DetailedArticlePageHeader } from "../DetailedArticlePageHeader/DetailedArticlePageHeader";
import { DetailedArticleCommentList } from "../DetailedArticleCommentList/DetailedArticleCommentList";
import { ArticleRecommendationsList } from "widgets/ArticleRecommendationsList";

interface DetailedArticlePageProps {
  className?: string;
}

const DetailedArticlePage: React.FC<DetailedArticlePageProps> = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation("detailed-article");

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
      <DetailedArticleCommentList articleId={id} />
    </PageWrapper>
  );
};

export default DetailedArticlePage;

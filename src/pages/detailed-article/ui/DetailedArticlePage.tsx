import React from "react";
import { useTranslation } from "react-i18next";

import { cn } from "shared/lib";

import classes from "./DetailedArticle.module.scss";
import { useParams } from "react-router-dom";
import { Text } from "shared/ui/Text";
import { DetailedArticle } from "entities/Article";

interface DetailedArticleProps {
  className?: string;
}

const DetailedArticlePage: React.FC<DetailedArticleProps> = ({ className }) => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <Text title="Error" variant="error" />;
  }

  return (
    <div className={cn(classes.DetailedArticlePage, {}, [className])}>
      <DetailedArticle id={id} />
    </div>
  );
};

export default DetailedArticlePage;

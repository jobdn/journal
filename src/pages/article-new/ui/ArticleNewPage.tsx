import React from "react";
import { useTranslation } from "react-i18next";

import { cn } from "shared/lib";
import { Text } from "shared/ui/Text";
import { PageWrapper } from "widgets/PageWrapper";

import classes from "./ArticleNewPage.module.scss";

interface ArticleNewPageProps {
  className?: string;
}

export const ArticleNewPage: React.FC<ArticleNewPageProps> = ({
  className,
}) => {
  const { t } = useTranslation();

  return (
    <PageWrapper className={cn(classes.ArticleNewPage, {}, [className])}>
      <Text title={t("create_page")} align="center" />
    </PageWrapper>
  );
};

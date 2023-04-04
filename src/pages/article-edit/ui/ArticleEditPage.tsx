import React from "react";
import { useTranslation } from "react-i18next";
import { cn } from "shared/lib";
import { Text } from "shared/ui/Text";
import { PageWrapper } from "widgets/PageWrapper";

import classes from "./ArticleEditPage.module.scss";

interface ArticleEditPageProps {
  className?: string;
}

export const ArticleEditPage: React.FC<ArticleEditPageProps> = ({
  className,
}) => {
  const { t } = useTranslation();

  return (
    <PageWrapper className={cn(classes.ArticleEditPage, {}, [className])}>
      <Text title={t("edit_page")} align="center" />
    </PageWrapper>
  );
};

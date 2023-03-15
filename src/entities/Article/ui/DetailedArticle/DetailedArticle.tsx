import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { cn, DynamicLoadingReducer, useAppDispatch } from "shared/lib";
import { AsyncReducers } from "shared/lib/components/DynamicLoadingReducer/DynamicLoadingReducer";
import { Text } from "shared/ui/Text";
import {
  selectDetailedArticleError,
  selectDetailedArticleIsLoading,
} from "entities/Article";

import classes from "./DetailedArticle.module.scss";

import { fetchArticleById } from "../../model/service/fetchArticleById";
import { detailedArticleReducer } from "../../model/slice/detailedArticleSlice";
import { Skeleton } from "shared/ui/Skeleton";

interface DetailedArticleProps {
  className?: string;
  id: string;
}

const asyncReducer: AsyncReducers = { detailedArticle: detailedArticleReducer };

export const DetailedArticle: React.FC<DetailedArticleProps> = ({
  className,
  id,
}) => {
  const { t } = useTranslation("detailed-article");
  const dispatch = useAppDispatch();
  const error = useSelector(selectDetailedArticleError);
  const isLoading = useSelector(selectDetailedArticleIsLoading);

  React.useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  let content;

  if (error) {
    content = <Text title={t("error.id")} variant="error" />;
  } else if (isLoading) {
    content = (
      <div className={classes.skeleton}>
        <Skeleton
          className={classes.avatar}
          variant="circle"
          height="150px"
          width="150px"
        />
        <Skeleton className={classes.text} height="30px" width="70%" />
        <Skeleton className={classes.text} height="30px" width="80%" />
        <Skeleton className={classes.text} height="30px" width="60%" />
        <Skeleton className={classes.text} height="30px" width="90%" />
        <Skeleton className={classes.code} height="200px" />
        <Skeleton className={classes.text} height="30px" />
        <Skeleton className={classes.text} height="30px" width="50%" />
      </div>
    );
  } else {
    content = <></>;
  }

  return (
    <DynamicLoadingReducer reducers={asyncReducer}>
      <div className={cn(classes.DetailedArticle, {}, [className])}>
        {content}
      </div>
    </DynamicLoadingReducer>
  );
};

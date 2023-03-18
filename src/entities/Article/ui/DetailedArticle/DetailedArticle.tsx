import React from "react";
import { useSelector } from "react-redux";

import {
  cn,
  DynamicLoadingReducer,
  useAppDispatch,
  useInitialEffect,
} from "shared/lib";
import { AsyncReducers } from "shared/lib/components/DynamicLoadingReducer/DynamicLoadingReducer";
import { Text } from "shared/ui/Text";
import { Skeleton } from "shared/ui/Skeleton";
import { Avatar } from "shared/ui/Avatar";

import classes from "./DetailedArticle.module.scss";

import {
  selectDetailedArticleData,
  selectDetailedArticleError,
  selectDetailedArticleIsLoading,
} from "../../model/selectors/detailedArticleSelectors/detailedArticleSelectors";
import { fetchArticleById } from "../../model/service/fetchArticleById";
import { detailedArticleReducer } from "../../model/slice/detailedArticleSlice";
import { mapArticleBlockObjToJsx } from "../../model/mappers/mapArticleBlockObjToJsx";

import CalendarIcon from "../../assets/calendar.svg";
import EyeIcon from "../../assets/eye.svg";

interface DetailedArticleProps {
  className?: string;
  id: string;
}

const asyncReducer: AsyncReducers = { detailedArticle: detailedArticleReducer };

export const DetailedArticle: React.FC<DetailedArticleProps> = ({
  className,
  id,
}) => {
  const dispatch = useAppDispatch();
  const error = useSelector(selectDetailedArticleError);
  const isLoading = useSelector(selectDetailedArticleIsLoading);
  const article = useSelector(selectDetailedArticleData);

  useInitialEffect(() => {
    dispatch(fetchArticleById(id));
  });

  let content;

  if (error) {
    content = <Text title={error} variant="error" align="center" />;
  } else if (isLoading) {
    content = (
      <>
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
      </>
    );
  } else {
    content = (
      <>
        <div className={classes.avatarWrapper}>
          <Avatar
            src={article?.img || ""}
            alt="Article img"
            className={classes.avatar}
            variant="circle"
            size={150}
          />
        </div>
        <Text
          title={article?.title}
          text={article?.subtitle}
          className={classes.text}
          size="l"
        />

        <div className={classes.stats}>
          <EyeIcon className="icon" />
          <Text text={String(article?.views)} />
        </div>
        <div className={classes.stats}>
          <CalendarIcon className="icon" />
          <Text text={article?.createdAt} />
        </div>

        {article?.blocks.map(mapArticleBlockObjToJsx)}
      </>
    );
  }

  return (
    <DynamicLoadingReducer reducers={asyncReducer}>
      <div className={cn(classes.DetailedArticle, {}, [className])}>
        {content}
      </div>
    </DynamicLoadingReducer>
  );
};

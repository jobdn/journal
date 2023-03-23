import React from "react";
import { useTranslation } from "react-i18next";
import { cn } from "shared/lib";

import classes from "./CommentList.module.scss";

import { Comment } from "../../types/Comment";
import { Text } from "shared/ui/Text";
import { CommentRow } from "../CommentRow/CommentRow";

interface CommentListProps {
  className?: string;
  commentList: Comment[];
  isLoading?: boolean;
  error?: string;
}

export const CommentList: React.FC<CommentListProps> = (props) => {
  const { className, commentList, isLoading, error } = props;
  const { t } = useTranslation();

  if (error) return <Text title={error} variant="error" align="center" />;

  if (!commentList?.length) {
    return (
      <div className={cn(classes.CommentList, {}, [className])}>
        <Text text={t("empty.comments")} align="center" />
      </div>
    );
  }

  return (
    <div className={cn(classes.CommentList, {}, [className])}>
      {commentList.map((comment) => (
        <CommentRow
          key={comment.id}
          className={cn("", {}, [classes.row])}
          comment={comment}
          isLoading={isLoading}
        />
      ))}
    </div>
  );
};

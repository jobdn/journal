import React from "react";

import { cn } from "shared/lib";
import { Avatar } from "shared/ui/Avatar";

import classes from "./CommentRow.module.scss";

import { Comment } from "../../types/Comment";
import { Text } from "shared/ui/Text";
import { Skeleton } from "shared/ui/Skeleton";
import { AppLink } from "shared/ui/AppLink";
import { AvailableRoutes } from "shared/config/router";

interface CommentRowProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentRow: React.FC<CommentRowProps> = (props) => {
  const { className, comment, isLoading } = props;

  if (isLoading) {
    return (
      <div className={cn(classes.CommentRow, {}, [className])}>
        <div className={classes.header}>
          <Skeleton variant="circle" height={40} width={40} />
          <Skeleton height={16} width={100} />
        </div>
        <Skeleton height={16} />
      </div>
    );
  }

  return (
    <div className={cn(classes.CommentRow, {}, [className])}>
      <AppLink
        to={`/${AvailableRoutes.PROFILE}/${comment?.user?.id}`}
        className={classes.header}
      >
        <Avatar
          size={40}
          src={comment?.user?.avatar || ""}
          alt="Comment Avatar"
          variant="circle"
        />
        <Text title={comment?.user?.username} />
      </AppLink>
      <Text text={comment?.text} />
    </div>
  );
};

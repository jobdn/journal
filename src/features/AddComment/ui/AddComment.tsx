import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { cn, useAppDispatch } from "shared/lib";
import { Button, ButtonVariant } from "shared/ui/Button";
import { Input } from "shared/ui/Input";

import { selectComment } from "../model/selectors/addCommentSelectors";
import { addCommentActions } from "../model/slice/addCommentSlice/addCommentSlice";

import classes from "./AddComment.module.scss";

interface AddCommentProps {
  className?: string;
  onSendComment: (text: string) => void;
}

export const AddComment: React.FC<AddCommentProps> = (props) => {
  const { t } = useTranslation("detailed-article");
  const comment = useSelector(selectComment);
  const dispatch = useAppDispatch();
  const { className, onSendComment } = props;

  const handleCommentChange = React.useCallback(
    (value: string) => {
      dispatch(addCommentActions.setComment(value));
    },
    [dispatch]
  );

  const handleSubmitComment = () => {
    if (!comment) return;

    onSendComment(comment);
  };

  return (
    <div className={cn(classes.AddComment, {}, [className])}>
      <Input
        value={comment || ""}
        onChange={handleCommentChange}
        placeholder={t("enter_comment")}
        className={classes.input}
        variant="fullWidth"
      />
      <Button
        variant={ButtonVariant.FILLED_INVERTED}
        onClick={handleSubmitComment}
      >
        {t("add_comment")}
      </Button>
    </div>
  );
};

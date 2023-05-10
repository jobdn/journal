import React from "react";
import { useTranslation } from "react-i18next";
import { AsyncReducers, DynamicLoadingReducer, cn } from "shared/lib";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Text } from "shared/ui/Text";

import { AddComment, addCommentReducer } from "features/AddComment";
import { Comment, CommentList } from "entities/Comment";
import { selectUserData } from "entities/User";

import classes from "./DetailedArticleCommentList.module.scss";
import {
  useAddArticleCommentMutation,
  useFetchArticleCommentsQuery,
} from "../../api/detailedArticleApi";

interface DetailedArticleCommentListProps {
  className?: string;
  articleId: string;
}

const lazyReducers: AsyncReducers = {
  addComment: addCommentReducer,
};

export const DetailedArticleCommentList: React.FC<
  DetailedArticleCommentListProps
> = (props) => {
  const { className, articleId } = props;
  const { t } = useTranslation("detailed-article");
  const userData = useSelector(selectUserData);
  const {
    isError: commentsError,
    isLoading: commentsIsLoading,
    data: comments,
  } = useFetchArticleCommentsQuery(articleId);
  const [addArticleComment, { isLoading: addRequestIsLoading }] =
    useAddArticleCommentMutation();

  const handleArticleCommentSend = React.useCallback(
    (comment: string) => {
      if (userData) {
        const newComment: Comment = {
          id: uuidv4(),
          articleId,
          text: comment,
          user: userData,
        };
        addArticleComment(newComment)
          .unwrap()
          .then(() => {
            toast.success(t("comment_success_add", { ns: "translation" }));
          })
          .catch((err) => {
            console.error(err);
            toast.error(t("comment_failed_add", { ns: "translation" }));
          });
      }
    },
    [addArticleComment, articleId, userData, t]
  );

  return (
    <DynamicLoadingReducer reducers={lazyReducers} removeAfterUnmount={false}>
      <div className={cn(classes.AddArticleComment, {}, [className])}>
        <Text title={t("comments-title")} className={classes.title} />
        <AddComment onSendComment={handleArticleCommentSend} />
        <CommentList
          commentList={comments}
          isLoading={commentsIsLoading || addRequestIsLoading}
          error={commentsError ? t("error.comments") : ""}
        />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </DynamicLoadingReducer>
  );
};

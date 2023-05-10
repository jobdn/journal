import { Comment } from "entities/Comment";
import { addCommentActions } from "features/AddComment";
import { rtkApi } from "shared/api/rtkApi";

const detailedArticleApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    fetchArticleComments: build.query<Comment[], string>({
      query: (articleId) => {
        return {
          url: `/comments`,
          params: {
            articleId,
            _expand: "user",
          },
        };
      },
      providesTags: ["Comments"],
    }),

    addArticleComment: build.mutation<Comment, Comment>({
      query: (comment) => {
        return {
          url: "/comments",
          body: {
            id: comment.id,
            text: comment.text,
            articleId: comment.articleId,
            userId: comment.user.id,
          },
          method: "POST",
        };
      },
      invalidatesTags: ["Comments"],
      onQueryStarted(comment, api) {
        const patchResult = api.dispatch(
          detailedArticleApi.util.updateQueryData(
            "fetchArticleComments",
            comment.articleId,
            (data) => {
              data.push(comment);
            }
          )
        );
        api.queryFulfilled.then(() => {
          api.dispatch(addCommentActions.setComment(""));
        });
        api.queryFulfilled.catch(patchResult.undo);
      },
    }),
  }),
  overrideExisting: true,
});

export const { useAddArticleCommentMutation, useFetchArticleCommentsQuery } =
  detailedArticleApi;

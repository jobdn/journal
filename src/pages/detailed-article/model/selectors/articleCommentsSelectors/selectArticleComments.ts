export const selectArticleCommentsIsLoading = (state: StateSchema) =>
  state.articleComments?.isLoading || false;
export const selectArticleCommentsError = (state: StateSchema) =>
  state.articleComments?.error || "";

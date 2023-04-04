export const selectArticleCommentsIsLoading = (state: StateSchema) =>
  state.detailedArticlePage?.articleComments?.isLoading || false;
export const selectArticleCommentsError = (state: StateSchema) =>
  state.detailedArticlePage?.articleComments?.error || "";

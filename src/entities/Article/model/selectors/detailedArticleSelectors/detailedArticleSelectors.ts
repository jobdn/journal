export const selectDetailedArticleIsLoading = (state: StateSchema) =>
  state.detailedArticle?.isLoading;
export const selectDetailedArticleData = (state: StateSchema) =>
  state.detailedArticle?.data;
export const selectDetailedArticleError = (state: StateSchema) =>
  state.detailedArticle?.error;
export const selectDetailedArticleWasInited = (state: StateSchema) =>
  state.detailedArticle?._wasInited;

export const selectArticleRecommendationsIsLoading = (state: StateSchema) =>
  state.detailedArticlePage?.articleRecommendations?.isLoading || false;

export const selectArticleRecommendationsError = (state: StateSchema) =>
  state.detailedArticlePage?.articleRecommendations?.error || "";

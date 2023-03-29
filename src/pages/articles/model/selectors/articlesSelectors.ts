export const selectArticlesIsLoading = (state: StateSchema) =>
  state?.articlesPage?.isLoading || false;
export const selectArticlesError = (state: StateSchema) =>
  state?.articlesPage?.error;
export const selectView = (state: StateSchema) =>
  state?.articlesPage?.view || "list";
export const selectArticlesPageNum = (state: StateSchema) =>
  state?.articlesPage?.page || 1;
export const selectArticlesLimit = (state: StateSchema) =>
  state?.articlesPage?.limit;
export const selectArticlesHasMore = (state: StateSchema) => {
  if (!state?.articlesPage) {
    return true;
  }

  return state?.articlesPage?.hasMore;
};

export const selectArticlesWasInit = (state: StateSchema) =>
  state?.articlesPage?._wasInit;

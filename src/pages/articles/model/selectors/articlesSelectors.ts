export const selectArticlesIsLoading = (state: StateSchema) =>
  state?.articlesPage?.isLoading || false;
export const selectArticlesError = (state: StateSchema) =>
  state?.articlesPage?.error;
export const selectView = (state: StateSchema) =>
  state?.articlesPage?.view || "list";

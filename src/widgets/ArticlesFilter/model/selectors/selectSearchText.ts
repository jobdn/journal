export const selectSearchText = (state: StateSchema) =>
  state.articlesFilter?.searchArticleText || "";

export const selectOrder = (state: StateSchema) =>
  state.articlesFilter?.order || "desc";

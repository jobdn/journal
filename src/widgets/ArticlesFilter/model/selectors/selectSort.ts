import { SortField } from "features/ArticleSelector";

export const selectSort = (state: StateSchema) =>
  state.articlesFilter?.sort || SortField.VIEW;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArticleTopic } from "entities/Article";
import { SortField } from "features/ArticleSelector";
import { SortOrder } from "shared/types/SortOrder";

import { ArticlesFilterSchema } from "../types/ArticlesFilterSchema";

const initialState: ArticlesFilterSchema = {
  order: "desc",
  sort: SortField.VIEW,
  searchArticleText: "",
  articleTopic: "ALL",
};

export const articlesFilterSlice = createSlice({
  name: "articlesFilter",
  initialState,
  reducers: {
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchArticleText = action.payload;
    },
    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload;
    },
    setSort: (state, action: PayloadAction<SortField>) => {
      state.sort = action.payload;
    },
    setArticleTopic: (state, action: PayloadAction<ArticleTopic>) => {
      state.articleTopic = action.payload;
    },
  },
});
export const {
  actions: articlesFilterActions,
  reducer: articlesFilterReducer,
} = articlesFilterSlice;

import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

import { ArticleListView, Article } from "entities/Article";
import { ARTICLE_LIST_VIEW_KEY } from "shared/constants/localStorage";
import { fetchArticles } from "../services/fetchArticles";

import { ArticlesPageSchema } from "../types/ArticlesPageSchema";

const initialView = localStorage.getItem(
  ARTICLE_LIST_VIEW_KEY
) as ArticleListView;

const initialState: ArticlesPageSchema = {
  error: undefined,
  isLoading: false,
  view: initialView,
  entities: {},
  ids: [],
};

const articlesPageAdapter = createEntityAdapter<Article>();
export const articlesPageSelectors = articlesPageAdapter.getSelectors(
  (state: StateSchema) =>
    state.articlesPage || articlesPageAdapter.getInitialState()
);

export const articlesPageSlice = createSlice({
  name: "articlesPageSlice",
  initialState:
    articlesPageAdapter.getInitialState<ArticlesPageSchema>(initialState),
  reducers: {
    setView: (state, action: PayloadAction<ArticleListView>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLE_LIST_VIEW_KEY, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.pending, (state) => {
      state.error = "";
      state.isLoading = true;
    });
    builder.addCase(fetchArticles.fulfilled, (state, action) => {
      state.isLoading = false;
      articlesPageAdapter.setAll(state, action.payload);
    });
    builder.addCase(fetchArticles.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload || "Default Error";
    });
  },
});

export const { actions: articlesPageActions, reducer: articlesPageReducer } =
  articlesPageSlice;

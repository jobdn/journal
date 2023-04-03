import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

import { ArticleListView, Article } from "entities/Article";
import { ARTICLE_LIST_VIEW_KEY } from "shared/constants/localStorage";
import { fetchArticles } from "../services/fetchArticles/fetchArticles";

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
  page: 1,
  limit: initialView === "list" ? 3 : 6,
  hasMore: true,
  _wasInit: false,
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
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setWasInit: (state, action: PayloadAction<boolean>) => {
      state._wasInit = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchArticles.pending, (state, action) => {
      state.error = "";
      state.isLoading = true;

      if (action.meta.arg?.replacePage) {
        articlesPageAdapter.removeAll(state);
      }
    });
    builder.addCase(fetchArticles.fulfilled, (state, action) => {
      state.isLoading = false;
      const newArticles = action.payload;
      state.hasMore = newArticles.length < state.limit ? false : true;

      if (action.meta.arg?.replacePage) {
        articlesPageAdapter.setAll(state, newArticles);
      } else {
        articlesPageAdapter.addMany(state, newArticles);
      }
    });
    builder.addCase(fetchArticles.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload || "Default Error";
    });
  },
});

export const { actions: articlesPageActions, reducer: articlesPageReducer } =
  articlesPageSlice;

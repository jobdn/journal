import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import { Article } from "entities/Article";
import { fetchArticleRecommendations } from "../services/fetchArticleRecommendations/fetchArticleRecommendations";

import { ArticleRecommendationsSchema } from "../types/ArticleRecommendationsSchema";

const initialState: ArticleRecommendationsSchema = {
  isLoading: false,
  error: "",
  ids: ["100", "101", "102"],
  entities: {
    // for loading
    "100": <Article>{
      id: "100",
    },
    "101": <Article>{
      id: "101",
    },
    "102": <Article>{
      id: "102",
    },
  },
};

export const articleRecommendationsAdapter = createEntityAdapter<Article>();

export const articleRecommendationsSelectors =
  articleRecommendationsAdapter.getSelectors(
    (state: StateSchema) =>
      state?.detailedArticlePage?.articleRecommendations ||
      articleRecommendationsAdapter.getInitialState()
  );

export const articleRecommendationsSlice = createSlice({
  name: "articleRecommendations",
  initialState: articleRecommendationsAdapter.getInitialState(initialState),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArticleRecommendations.pending, (state) => {
      state.error = "";
      state.isLoading = true;
    });
    builder.addCase(fetchArticleRecommendations.fulfilled, (state, action) => {
      state.isLoading = false;
      articleRecommendationsAdapter.setAll(state, action.payload);
    });
    builder.addCase(fetchArticleRecommendations.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const {
  actions: articleRecommendationsActions,
  reducer: articleRecommendationsReducer,
} = articleRecommendationsSlice;

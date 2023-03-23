import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { Comment } from "entities/Comment/types/Comment";

import { ArticleCommentsSchema } from "../types/ArticleCommentsSchema";
import { fetchArticleComments } from "./services/fetchArticleComments/fetchArticleComments";

const initialState: ArticleCommentsSchema = {
  isLoading: false,
  error: "",
  data: null,
  ids: ["100", "101", "102"],
  entities: {
    // for loading
    "100": <Comment>{
      id: "100",
    },
    "101": <Comment>{
      id: "101",
    },
    "102": <Comment>{
      id: "102",
    },
  },
};

export const articleCommentsAdapter = createEntityAdapter<Comment>();

export const articleCommentsSelectors = articleCommentsAdapter.getSelectors(
  (state: StateSchema) =>
    state.articleComments || articleCommentsAdapter.getInitialState()
);

export const articleCommentsSlice = createSlice({
  name: "articleComments",
  initialState: articleCommentsAdapter.getInitialState(initialState),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArticleComments.pending, (state) => {
      state.error = "";
      state.isLoading = true;
    });
    builder.addCase(fetchArticleComments.fulfilled, (state, action) => {
      state.isLoading = false;
      articleCommentsAdapter.setAll(state, action.payload);
    });
    builder.addCase(fetchArticleComments.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const {
  actions: articleCommentsActions,
  reducer: articleCommentsReducer,
} = articleCommentsSlice;

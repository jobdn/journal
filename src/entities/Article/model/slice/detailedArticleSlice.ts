import { createSlice } from "@reduxjs/toolkit";

import { DetailedArticleSchema } from "../../types/DetailedArticleSchema";
import { fetchArticleById } from "../services/fetchArticleById/fetchArticleById";

const initialState: DetailedArticleSchema = {
  isLoading: false,
  error: "",
  data: null,
  _wasInited: false,
};

export const detailedArticleSlice = createSlice({
  name: "detailedArticle",
  initialState,
  reducers: {
    onInit: (state) => {
      state._wasInited = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticleById.pending, (state) => {
      state.error = "";
      state.isLoading = true;
    });
    builder.addCase(fetchArticleById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchArticleById.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const {
  actions: detailedArticleActions,
  reducer: detailedArticleReducer,
} = detailedArticleSlice;

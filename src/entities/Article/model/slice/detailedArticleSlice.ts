import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { DetailedArticleSchema } from "../../types/DetailedArticleSchema";
import { fetchArticleById } from "../service/fetchArticleById";

const initialState: DetailedArticleSchema = {
  isLoading: false,
  error: "",
  data: null,
};

export const detailedArticleSlice = createSlice({
  name: "detailedArticle",
  initialState,
  reducers: {},
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

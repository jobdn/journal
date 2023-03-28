import { createAsyncThunk } from "@reduxjs/toolkit";

import { Comment } from "entities/Comment";

import i18next from "i18next";

export const fetchArticleComments = createAsyncThunk<
  Comment[],
  string | undefined,
  ThunkOptions<string>
>("detailed-article/fetchArticleComments", async (articleId, thunkApi) => {
  const { rejectWithValue, extra } = thunkApi;
  try {
    if (!articleId)
      return rejectWithValue(
        i18next.t("error.comments", { ns: "detailed-article" })
      );

    const response = await extra.api.get<Comment[]>(
      `/comments?articleId=${articleId}&_expand=user`
    );

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (error) {
    return rejectWithValue(
      i18next.t("error.comments", { ns: "detailed-article" })
    );
  }
});

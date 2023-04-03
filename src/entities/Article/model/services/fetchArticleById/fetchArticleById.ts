import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import { Article } from "../../../types/Article";

import i18next from "i18next";

export const fetchArticleById = createAsyncThunk<
  Article,
  string,
  ThunkOptions<string>
>("detailedArticle/fetchArticleById", async (id, thunkApi) => {
  const { rejectWithValue, extra } = thunkApi;
  try {
    const response = await extra.api.get<Article>("/articles/" + id);

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (error) {
    const typedError = error as AxiosError;

    if (typedError?.response?.status === 404) {
      return rejectWithValue(i18next.t("error.id", { ns: "detailed-article" }));
    }

    return rejectWithValue(i18next.t("error.server_down"));
  }
});

import { createAsyncThunk } from "@reduxjs/toolkit";

import { Article } from "entities/Article";
import i18next from "i18next";

export const fetchArticleRecommendations = createAsyncThunk<
  Article[],
  string | undefined,
  ThunkOptions<string>
>(
  "detailed-article/fetchArticleRecommendations",
  async (articleId, thunkApi) => {
    const { rejectWithValue, extra } = thunkApi;
    try {
      const response = await extra.api<Article[]>("/articles", {
        params: {
          _expand: "user",
          _limit: 4,
        },
      });

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      return rejectWithValue(
        i18next.t("error.recommendations", { ns: "detailed-article" })
      );
    }
  }
);

import { createAsyncThunk } from "@reduxjs/toolkit";
import { Article } from "entities/Article";
import i18next from "i18next";

export const fetchArticles = createAsyncThunk<
  Article[],
  void,
  ThunkOptions<string>
>("fetchArticles", async (_, thunkApi) => {
  const { rejectWithValue, extra } = thunkApi;
  try {
    const response = await extra.api<Article[]>("/articles", {
      params: {
        _expand: "user",
      },
    });
    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (error) {
    return rejectWithValue(i18next.t("error.articles_page"));
  }
});

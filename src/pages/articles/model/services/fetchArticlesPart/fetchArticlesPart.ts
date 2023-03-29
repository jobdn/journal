import { createAsyncThunk } from "@reduxjs/toolkit";
import i18next from "i18next";
import {
  selectArticlesHasMore,
  selectArticlesIsLoading,
} from "../../selectors/articlesSelectors";
import { fetchArticles } from "../fetchArticles/fetchArticles";

export const fetchArticlesPart = createAsyncThunk<
  void,
  void,
  ThunkOptions<string>
>("articlesPageSlice/fetchArticlesPart", async (_, thunkApi) => {
  const { rejectWithValue, getState, dispatch } = thunkApi;
  try {
    const hasMore = selectArticlesHasMore(getState());
    const isLoading = selectArticlesIsLoading(getState());

    if (!hasMore || isLoading) return;

    dispatch(fetchArticles());
  } catch (error) {
    return rejectWithValue(i18next.t("error.articles_page"));
  }
});

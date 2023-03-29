import { createAsyncThunk } from "@reduxjs/toolkit";
import { Article } from "entities/Article";
import i18next from "i18next";
import {
  selectArticlesLimit,
  selectArticlesPageNum,
} from "../../selectors/articlesSelectors";
import { articlesPageActions } from "../../slices/articlesPageSlice";

export const fetchArticles = createAsyncThunk<
  Article[],
  void,
  ThunkOptions<string>
>("articlesPageSlice/fetchArticles", async (_, thunkApi) => {
  const { rejectWithValue, extra, getState, dispatch } = thunkApi;
  try {
    const page = selectArticlesPageNum(getState());
    const limit = selectArticlesLimit(getState());
    const response = await extra.api<Article[]>("/articles", {
      params: {
        _expand: "user",
        _page: page,
        _limit: limit,
      },
    });
    dispatch(articlesPageActions.setPage(page + 1));
    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (error) {
    return rejectWithValue(i18next.t("error.articles_page"));
  }
});

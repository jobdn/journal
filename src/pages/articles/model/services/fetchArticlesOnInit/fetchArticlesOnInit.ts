import { createAsyncThunk } from "@reduxjs/toolkit";
import i18next from "i18next";
import { selectArticlesWasInit } from "../../selectors/articlesSelectors";
import { articlesPageActions } from "../../slices/articlesPageSlice";
import { fetchArticles } from "../fetchArticles/fetchArticles";

export const fetchArticlesOnInit = createAsyncThunk<
  void,
  void,
  ThunkOptions<string>
>("articlesPageSlice/fetchArticlesOnInit", async (_, thunkApi) => {
  const { rejectWithValue, getState, dispatch } = thunkApi;
  try {
    const wasInit = selectArticlesWasInit(getState());
    if (!wasInit) {
      dispatch(fetchArticles());
      dispatch(articlesPageActions.setWasInit(true));
    }
  } catch (error) {
    return rejectWithValue(i18next.t("error.articles_page"));
  }
});

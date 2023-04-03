import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  selectDetailedArticleData,
  selectDetailedArticleWasInited,
} from "../../selectors/detailedArticleSelectors/detailedArticleSelectors";
import { fetchArticleById } from "../fetchArticleById/fetchArticleById";
import { detailedArticleActions } from "../../slice/detailedArticleSlice";

export const fetchDetailedArticleOnInit = createAsyncThunk<
  void,
  string,
  ThunkOptions<string>
>("detailedArticle/fetchDetailedArticleOnInit", async (id, thunkApi) => {
  const { getState, dispatch } = thunkApi;
  const wasInited = selectDetailedArticleWasInited(getState());
  const article = selectDetailedArticleData(getState());

  if (!wasInited || id !== article?.id) {
    dispatch(fetchArticleById(id));
    dispatch(detailedArticleActions.onInit());
  }
});

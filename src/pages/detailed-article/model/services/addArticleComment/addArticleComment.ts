import { createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import i18next from "i18next";
import { selectUserData } from "entities/User";
import { selectDetailedArticleData } from "entities/Article";
import { fetchArticleComments } from "../fetchArticleComments/fetchArticleComments";
import { addCommentActions } from "features/AddComment";

export const addArticleComment = createAsyncThunk<
  Comment,
  string,
  ThunkOptions<string>
>("detailed-article/addArticleComment", async (comment, thunkApi) => {
  const { rejectWithValue, extra, getState, dispatch } = thunkApi;
  const userData = selectUserData(getState());
  const article = selectDetailedArticleData(getState());

  if (!userData || !article || !comment)
    return rejectWithValue(i18next.t("error.invalid_data"));

  try {
    const response = await extra.api.post<Comment>(`/comments/`, {
      id: uuidv4(),
      text: comment,
      articleId: article.id,
      userId: userData.id,
    });
    dispatch(fetchArticleComments(article.id));

    if (!response.data) {
      throw new Error();
    }

    dispatch(addCommentActions.setComment(""));

    return response.data;
  } catch (error) {
    return rejectWithValue(i18next.t("error.addComment_loading"));
  }
});

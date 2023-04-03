import { createAsyncThunk } from "@reduxjs/toolkit";
import i18next from "i18next";

import { Article } from "entities/Article";
import {
  selectArticleTopic,
  selectOrder,
  selectSearchText,
  selectSort,
} from "widgets/ArticlesFilter";

import {
  selectArticlesLimit,
  selectArticlesPageNum,
} from "../../selectors/articlesSelectors";
import { articlesPageActions } from "../../slices/articlesPageSlice";
import { addQueryParams } from "shared/lib/url/addQueryParams";

export const fetchArticles = createAsyncThunk<
  Article[],
  { replacePage: boolean } | undefined,
  ThunkOptions<string>
>("articlesPageSlice/fetchArticles", async (args, thunkApi) => {
  const { rejectWithValue, extra, getState, dispatch } = thunkApi;
  try {
    const page = args?.replacePage ? 1 : selectArticlesPageNum(getState());
    const limit = selectArticlesLimit(getState());
    const search = selectSearchText(getState());
    const sort = selectSort(getState());
    const order = selectOrder(getState());
    const topic = selectArticleTopic(getState());

    const response = await extra.api<Article[]>("/articles", {
      params: {
        _expand: "user",
        _page: page,
        _limit: limit,
        _sort: sort,
        _order: order,
        type: topic === "ALL" ? undefined : topic,
        q: search,
      },
    });

    if (args?.replacePage) {
      dispatch(articlesPageActions.setPage(1));
    } else {
      dispatch(articlesPageActions.setPage(page + 1));
    }
    addQueryParams({ sort, order, search, type: topic });

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (error) {
    return rejectWithValue(i18next.t("error.articles_page"));
  }
});

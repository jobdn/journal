import { createAsyncThunk } from "@reduxjs/toolkit";
import i18next from "i18next";

import { SortOrder } from "shared/types/SortOrder";
import { articlesFilterActions } from "widgets/ArticlesFilter";
import { SortField } from "features/ArticleSelector";

import { selectArticlesWasInit } from "../../selectors/articlesSelectors";
import { articlesPageActions } from "../../slices/articlesPageSlice";
import { fetchArticles } from "../fetchArticles/fetchArticles";
import { ArticleTopic } from "entities/Article";

export const fetchArticlesOnInit = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkOptions<string>
>("articlesPageSlice/fetchArticlesOnInit", async (params, thunkApi) => {
  const { rejectWithValue, getState, dispatch } = thunkApi;

  try {
    const wasInit = selectArticlesWasInit(getState());

    if (!wasInit) {
      const sortParam = params.get("sort") as SortField;
      const searchParam = params.get("search");
      const orderParam = params.get("order") as SortOrder;
      const topic = params.get("type") as ArticleTopic;

      if (sortParam) {
        dispatch(articlesFilterActions.setSort(sortParam));
      }
      if (searchParam) {
        dispatch(articlesFilterActions.setSearchText(searchParam));
      }
      if (orderParam) {
        dispatch(articlesFilterActions.setOrder(orderParam));
      }
      if (topic) {
        dispatch(articlesFilterActions.setArticleTopic(topic));
      }

      dispatch(fetchArticles());
      dispatch(articlesPageActions.setWasInit(true));
    }
  } catch (error) {
    return rejectWithValue(i18next.t("error.articles_page"));
  }
});

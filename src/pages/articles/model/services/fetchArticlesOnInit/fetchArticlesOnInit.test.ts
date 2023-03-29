import { TestAsyncThunk } from "shared/lib/tests";

import { fetchArticlesOnInit } from "./fetchArticlesOnInit";
import { fetchArticles } from "../fetchArticles/fetchArticles";

jest.mock("../fetchArticles/fetchArticles");

describe("fetchArticlesOnInit.test", () => {
  it("Should fetch articles when reducer was not init", async () => {
    const thunk = new TestAsyncThunk(fetchArticlesOnInit, {
      articlesPage: {
        limit: 5,
        hasMore: true,
        page: 1,
        isLoading: false,
        _wasInit: false, // 👈
      },
    });
    const result = await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(4);
    expect(fetchArticles).toBeCalledTimes(1);
    expect(result.meta.requestStatus).toBe("fulfilled");
  });
  it("Should not fetch articles if slice was inited", async () => {
    const thunk = new TestAsyncThunk(fetchArticlesOnInit, {
      articlesPage: {
        limit: 5,
        hasMore: true,
        page: 1,
        isLoading: false,
        _wasInit: true, // 👈
      },
    });
    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticles).toBeCalledTimes(0);
  });
});

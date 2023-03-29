import { TestAsyncThunk } from "shared/lib/tests";

import { fetchArticlesPart } from "./fetchArticlesPart";
import { fetchArticles } from "../fetchArticles/fetchArticles";

jest.mock("../fetchArticles/fetchArticles");

describe("fetchArticlesPart.test", () => {
  it("Should fetch articles", async () => {
    const thunk = new TestAsyncThunk(fetchArticlesPart, {
      articlesPage: { limit: 5, hasMore: true, page: 1, isLoading: false },
    });
    const result = await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(3);
    expect(fetchArticles).toBeCalledTimes(1);
    expect(result.meta.requestStatus).toBe("fulfilled");
  });
  it("Should not fetch articles if prev part is loading", async () => {
    const thunk = new TestAsyncThunk(fetchArticlesPart, {
      articlesPage: {
        limit: 5,
        hasMore: true,
        page: 1,
        isLoading: true, // 👈
      },
    });
    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticles).not.toBeCalled();
  });

  it("Should not fetch articles if there is not articles in backend", async () => {
    const thunk = new TestAsyncThunk(fetchArticlesPart, {
      articlesPage: {
        limit: 5,
        hasMore: false, // 👈
        page: 1,
        isLoading: false,
      },
    });
    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticles).not.toBeCalled();
  });
});

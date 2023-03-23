import { AxiosResponse } from "axios";
import i18next from "i18next";

import { TestAsyncThunk } from "shared/lib/tests";

import { Article } from "../../types/Article";
import { article } from "../../constants/article";

import { fetchArticleById } from "./fetchArticleById";

describe("fetchArticleById.test", () => {
  it("Should fetch article by id", async () => {
    const thunk = new TestAsyncThunk(fetchArticleById);
    thunk.api.get.mockReturnValue(
      Promise.resolve<Partial<AxiosResponse<Article>>>({
        data: article,
      })
    );
    const result = await thunk.callThunk("1");

    expect(thunk.api.get).toBeCalledTimes(1);
    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(result.meta.requestStatus).toBe("fulfilled");
  });

  it("Should reject if there is not such article with id", async () => {
    const thunk = new TestAsyncThunk(fetchArticleById);
    thunk.api.get.mockRejectedValue({
      response: {
        status: 404,
      },
    });

    const result = await thunk.callThunk("101111");

    expect(thunk.api.get).toBeCalledTimes(1);
    expect(result.payload).toBe(
      i18next.t("error.id", { ns: "detailed-article" })
    );
    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(result.meta.requestStatus).toBe("rejected");
  });
  it("Should reject if server is down", async () => {
    const thunk = new TestAsyncThunk(fetchArticleById);
    thunk.api.get.mockRejectedValue({
      response: {
        status: 500,
      },
    });

    const result = await thunk.callThunk("1");

    expect(thunk.api.get).toBeCalledTimes(1);
    expect(result.payload).toBe(i18next.t("error.server_down"));
    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(result.meta.requestStatus).toBe("rejected");
  });
});

import { DetailedArticleSchema } from "../../types/DetailedArticleSchema";
import { fetchArticleById } from "../service/fetchArticleById";
import { detailedArticleReducer } from "./detailedArticleSlice";
import { article } from "../../constants/article";

describe("userSlice.test", () => {
  const initialState: DetailedArticleSchema = {
    data: null,
    isLoading: false,
    error: "",
  };

  it("should set isLoading to false", () => {
    expect(
      detailedArticleReducer(initialState, fetchArticleById.pending)
    ).toEqual({ ...initialState, isLoading: true });
  });

  it("should set data to loaded data", () => {
    expect(
      detailedArticleReducer(
        initialState,
        fetchArticleById.fulfilled(article, "", "")
      )
    ).toEqual({ ...initialState, data: article, isLoading: false });
  });
});
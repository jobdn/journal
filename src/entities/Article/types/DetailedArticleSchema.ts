import { Article } from "./Article";

export interface DetailedArticleSchema {
  isLoading: boolean;
  error?: string;
  data: Article | null;
}

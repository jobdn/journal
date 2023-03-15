export { DetailedArticleSchema } from "./types/DetailedArticleSchema";
export { DetailedArticle } from "./ui/DetailedArticle/DetailedArticle";
export { detailedArticleReducer } from "./model/slice/detailedArticleSlice";
export {
  selectDetailedArticleData,
  selectDetailedArticleError,
  selectDetailedArticleIsLoading,
} from "./model/selectors/detailedArticleSelectors/detailedArticleSelectors";

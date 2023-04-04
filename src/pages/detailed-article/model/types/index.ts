import { ArticleCommentsSchema } from "./ArticleCommentsSchema";
import { ArticleRecommendationsSchema } from "./ArticleRecommendationsSchema";

export interface DetailedArticlePageSchema {
  articleComments: ArticleCommentsSchema;
  articleRecommendations: ArticleRecommendationsSchema;
}

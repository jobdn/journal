import { ArticleTopic } from "entities/Article";
import { SortField } from "features/ArticleSelector";
import { SortOrder } from "shared/types/SortOrder";

export interface ArticlesFilterSchema {
  sort: SortField;
  order: SortOrder;
  searchArticleText: string;
  articleTopic: ArticleTopic;
}

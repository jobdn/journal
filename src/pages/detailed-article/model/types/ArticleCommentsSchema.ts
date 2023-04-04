import { EntityState } from "@reduxjs/toolkit";
import { Comment } from "entities/Comment/types/Comment";

export interface ArticleCommentsSchema extends EntityState<Comment> {
  isLoading: boolean;
  error?: string;
}

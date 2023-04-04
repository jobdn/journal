import { combineReducers } from "@reduxjs/toolkit";

import { DetailedArticlePageSchema } from "../types";
import { articleCommentsReducer } from "./articleCommentsSlice";
import { articleRecommendationsReducer } from "./articleRecommendationsSlice";

export const detailedArticlePageReducer =
  combineReducers<DetailedArticlePageSchema>({
    articleComments: articleCommentsReducer,
    articleRecommendations: articleRecommendationsReducer,
  });

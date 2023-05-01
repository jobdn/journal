import { combineReducers } from "@reduxjs/toolkit";

import { DetailedArticlePageSchema } from "../types";
import { articleCommentsReducer } from "./articleCommentsSlice";

export const detailedArticlePageReducer =
  combineReducers<DetailedArticlePageSchema>({
    articleComments: articleCommentsReducer,
  });

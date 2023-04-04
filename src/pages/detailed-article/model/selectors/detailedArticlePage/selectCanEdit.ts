import { createSelector } from "@reduxjs/toolkit";

import { selectDetailedArticleData } from "entities/Article";
import { selectUserData } from "entities/User";

export const selectCanEdit = createSelector(
  [selectDetailedArticleData, selectUserData],
  (article, user) => {
    if (!article || !user) return false;

    return article.user.id === user.id;
  }
);

import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { setupStore } from "./setupStore";

import { UserSchema } from "entities/User";
import { AuthSchema } from "features/AuthByUsername";
import { ProfileSchema } from "entities/Profile";
import { DetailedArticleSchema } from "entities/Article";
import { DetailedArticlePageSchema } from "pages/detailed-article";
import { AddCommentSchema } from "features/AddComment";
import { ArticlesPageSchema } from "pages/articles";
import { RememberScrollSchema } from "widgets/PageWrapper";
import { ArticlesFilterSchema } from "widgets/ArticlesFilter";
import { rtkApi } from "shared/api/rtkApi";

declare global {
  export type AppStore = ReturnType<typeof setupStore>;
  export type AppDispatch = AppStore["dispatch"];
  interface StateSchema {
    user: UserSchema;
    scroll: RememberScrollSchema;
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

    // 👇 async reducers
    auth?: AuthSchema;
    profile?: ProfileSchema;
    detailedArticle?: DetailedArticleSchema;
    addComment?: AddCommentSchema;
    detailedArticlePage?: DetailedArticlePageSchema;
    articlesPage?: ArticlesPageSchema;
    articlesFilter?: ArticlesFilterSchema;
  }

  export interface ThunkOptions<T> {
    state: StateSchema;
    rejectValue: T;
    extra: ThunkExtraArg;
  }

  export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: CreateReducerManager;
  }

  export type ReducerKey = keyof StateSchema;

  export interface ThunkExtraArg {
    api: AxiosInstance;
  }
}

export interface CreateReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: ReducerKey, reducer: Reducer) => void;
  remove: (key: ReducerKey) => void;
}

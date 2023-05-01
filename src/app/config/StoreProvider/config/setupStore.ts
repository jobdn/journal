import { configureStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";

import { userReducer } from "entities/User";
import { api } from "shared/api/api";
import { rememberScrollReducer } from "widgets/PageWrapper";
import { createReducerManager } from "./createReducerManager";
import { rtkApi } from "shared/api/rtkApi";

export const setupStore = (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
) => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducer,
    scroll: rememberScrollReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  };
  const reducerManager = createReducerManager(rootReducer);
  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<StateSchema>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            api,
          },
        },
      }).concat(rtkApi.middleware),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
};

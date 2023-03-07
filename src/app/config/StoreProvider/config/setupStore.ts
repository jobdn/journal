import { configureStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";

import { counterReducer } from "entities/Counter";
import { userReducer } from "entities/User";
import { api } from "shared/api/api";
import { createReducerManager } from "./createReducerManager";

export const setupStore = (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
) => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
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
      }),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
};

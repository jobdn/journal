import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import type { StateSchema } from "./StateSchema";

import { counterReducer } from "entities/Counter";
import { userReducer } from "entities/User";
import { authReducer } from "features/AuthByUsername/model/authSlice";

export const setupStore = (initialState?: StateSchema) => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
    auth: authReducer,
  };
  const store = configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });

  return store;
};

declare global {
  export type AppStore = ReturnType<typeof setupStore>;
  export type AppDispatch = AppStore["dispatch"];
}

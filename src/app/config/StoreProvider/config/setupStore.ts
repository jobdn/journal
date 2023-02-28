import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StoreSchema } from "./StoreSchema";

import { counterReducer } from "entities/Counter";
import { userReducer } from "entities/User";

export const setupStore = (initialState: StoreSchema) => {
  const rootReducer: ReducersMapObject<StoreSchema> = {
    counter: counterReducer,
    user: userReducer,
  };

  return configureStore<StoreSchema>({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
};

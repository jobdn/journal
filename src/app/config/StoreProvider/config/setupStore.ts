import { configureStore, DeepPartial } from "@reduxjs/toolkit";
import { StoreSchema } from "./StoreSchema";

import { counterReducer } from "entities/Counter";

export const setupStore = (
  initialState: StoreSchema | DeepPartial<StoreSchema>
) => {
  return configureStore<DeepPartial<StoreSchema>>({
    reducer: {
      counter: counterReducer,
    },
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
};

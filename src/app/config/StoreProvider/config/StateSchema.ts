import { CounterSchema } from "entities/Counter";
import { UserSchema } from "entities/User";
import { AuthSchema } from "features/AuthByUsername";
import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit";
import { setupStore } from "./setupStore";
import { ProfileSchema } from "entities/Profile";

export interface CreateReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: ReducerKey, reducer: Reducer) => void;
  remove: (key: ReducerKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: CreateReducerManager;
}

export type ReducerKey = keyof StateSchema;

declare global {
  export type AppStore = ReturnType<typeof setupStore>;
  export type AppDispatch = AppStore["dispatch"];
  interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;

    // 👇 async reducers
    auth?: AuthSchema;
    profile?: ProfileSchema;
  }
}

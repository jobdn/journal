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

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  // В нижнем поле используется ?: потому что в будущем этот редьюсер будет ленивым
  auth?: AuthSchema;
}

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

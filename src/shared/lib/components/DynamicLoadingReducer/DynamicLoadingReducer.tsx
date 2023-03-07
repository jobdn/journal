import React from "react";
import { useStore } from "react-redux";

import { Reducer } from "@reduxjs/toolkit";
import { ReducerKey, ReduxStoreWithManager } from "app/config/StoreProvider";
import { useAppDispatch } from "shared/lib";

export type AsyncReducers = {
  [key in ReducerKey]?: Reducer;
};
export type ReducerType = [ReducerKey, Reducer];

interface DynamicLoadingReducerProps {
  className?: string;
  reducers: AsyncReducers;
}

export const DynamicLoadingReducer: React.FC<DynamicLoadingReducerProps> = (
  props
) => {
  const { children, reducers } = props;
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    Object.entries(reducers).forEach(([reducerName, reducer]) => {
      store.reducerManager.add(reducerName as ReducerKey, reducer);
      dispatch({ type: `INIT ${reducerName} LAZY REDUCER` });
    });

    return () => {
      Object.entries(reducers).forEach(([reducerName]) => {
        store.reducerManager.remove(reducerName as ReducerKey);
        dispatch({ type: `REMOVE ${reducerName} LAZY REDUCER` });
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};

import { ReducersMapObject } from "@reduxjs/toolkit";
import React from "react";
import { Provider } from "react-redux";
import { setupStore } from "../config/setupStore";

interface StoreProviderProps {
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: ReducersMapObject<DeepPartial<StateSchema>>;
}

export const StoreProvider: React.FC<StoreProviderProps> = (props) => {
  const { children, initialState, asyncReducers } = props;
  const store = setupStore(
    initialState as StateSchema,
    asyncReducers as ReducersMapObject<StateSchema>
  );

  return <Provider store={store}>{children}</Provider>;
};

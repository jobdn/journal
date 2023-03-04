import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
import React from "react";
import { Provider } from "react-redux";
import { setupStore } from "../config/setupStore";
import { StateSchema } from "../config/StateSchema";

interface StoreProviderProps {
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: ReducersMapObject<DeepPartial<StateSchema>>;
}

export const StoreProvider: React.FC<StoreProviderProps> = (props) => {
  const { children, initialState } = props;
  const store = setupStore(initialState as StateSchema);

  return <Provider store={store}>{children}</Provider>;
};
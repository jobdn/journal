import { DeepPartial } from "@reduxjs/toolkit";
import React from "react";
import { Provider } from "react-redux";
import { setupStore } from "../config/setupStore";
import { StoreSchema } from "../config/StoreSchema";

interface StoreProviderProps {
  initialState?: DeepPartial<StoreSchema>;
}

export const StoreProvider: React.FC<StoreProviderProps> = (props) => {
  const { children, initialState } = props;
  const store = setupStore(initialState as StoreSchema);

  return <Provider store={store}>{children}</Provider>;
};

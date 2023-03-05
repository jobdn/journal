import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
import { Story } from "@storybook/react";
import { StoreProvider } from "app/config/StoreProvider";
import { authReducer } from "features/AuthByUsername";

const defaultAsyncReducers: ReducersMapObject<DeepPartial<StateSchema>> = {
  auth: authReducer,
};

export const StoreDecorator =
  (
    initialState?: DeepPartial<StateSchema>,
    asyncReducers?: ReducersMapObject<DeepPartial<StateSchema>>
  ) =>
  (Story: Story) => {
    return (
      <StoreProvider
        initialState={initialState}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
        <Story />
      </StoreProvider>
    );
  };

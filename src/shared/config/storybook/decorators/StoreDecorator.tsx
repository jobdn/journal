import { ReducersMapObject } from "@reduxjs/toolkit";
import { Story } from "@storybook/react";
import { StoreProvider } from "app/config/StoreProvider";
import { authReducer } from "features/AuthByUsername";
import { AsyncReducers } from "shared/lib/components/DynamicLoadingReducer/DynamicLoadingReducer";

const defaultAsyncReducers: AsyncReducers = {
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

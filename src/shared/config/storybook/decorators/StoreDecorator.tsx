import { ReducersMapObject } from "@reduxjs/toolkit";
import { Story } from "@storybook/react";
import { StoreProvider } from "app/config/StoreProvider";
import { detailedArticleReducer } from "entities/Article";
import { authReducer } from "features/AuthByUsername";
import { profileReducer } from "features/EditableProfileCard";
import { AsyncReducers } from "shared/lib/components/DynamicLoadingReducer/DynamicLoadingReducer";

const defaultAsyncReducers: AsyncReducers = {
  auth: authReducer,
  profile: profileReducer,
  detailedArticle: detailedArticleReducer,
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

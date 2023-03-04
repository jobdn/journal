import { StateSchema } from "app/config/StoreProvider";

export const selectIsLoading = (state: StateSchema) =>
  state?.auth?.isLoading || false;

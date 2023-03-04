import { StateSchema } from "app/config/StoreProvider";

export const selectUsername = (state: StateSchema) =>
  state?.auth?.username || "";

import { StateSchema } from "app/config/StoreProvider";

export const selectPassword = (state: StateSchema) =>
  state?.auth?.password || "";

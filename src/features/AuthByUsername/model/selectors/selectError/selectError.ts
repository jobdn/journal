import { StateSchema } from "app/config/StoreProvider";

export const selectError = (state: StateSchema) => state?.auth?.error || "";

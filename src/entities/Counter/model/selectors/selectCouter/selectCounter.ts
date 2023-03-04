import { StateSchema } from "app/config/StoreProvider";

export const selectCounter = (state: StateSchema) => state.counter;

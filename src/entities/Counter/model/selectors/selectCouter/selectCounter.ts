import { StoreSchema } from "app/config/StoreProvider";

export const selectCounter = (state: StoreSchema) => state.counter;

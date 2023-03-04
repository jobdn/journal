import { StateSchema } from "app/config/StoreProvider";

export const selectUserData = (state: StateSchema) => state.user.userData;

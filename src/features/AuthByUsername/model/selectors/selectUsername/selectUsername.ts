export const selectUsername = (state: StateSchema) =>
  state?.auth?.username || "";

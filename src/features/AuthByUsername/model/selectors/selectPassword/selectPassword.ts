export const selectPassword = (state: StateSchema) =>
  state?.auth?.password || "";

export const selectIsLoading = (state: StateSchema) =>
  state?.auth?.isLoading || false;

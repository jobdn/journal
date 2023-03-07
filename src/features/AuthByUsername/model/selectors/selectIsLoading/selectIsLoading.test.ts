import { selectIsLoading } from "./selectIsLoading";

describe("selectIsLoading.test", () => {
  test("Should return aut loading indicator", () => {
    const state: DeepPartial<StateSchema> = {
      auth: {
        isLoading: true,
      },
    };
    expect(selectIsLoading(state as StateSchema)).toBe(true);
  });

  test("Should return false if auth state is empty", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectIsLoading(state as StateSchema)).toBe(false);
  });
});

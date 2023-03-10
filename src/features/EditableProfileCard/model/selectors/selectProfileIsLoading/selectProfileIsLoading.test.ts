import { selectProfileIsLoading } from "./selectProfileIsLoading";

describe("selectProfileIsLoading.test", () => {
  test("Should return is loading profile flag", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: false,
      },
    };
    expect(selectProfileIsLoading(state as StateSchema)).toBe(false);
  });

  test("Should return undefined if profile state is empty", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectProfileIsLoading(state as StateSchema)).toBe(undefined);
  });
});

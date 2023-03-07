import { selectProfileIsLoading } from "./selectProfileIsLoading";

describe("selectProfileIsLoading.test", () => {
  test("Should return counter slice", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: false,
      },
    };
    expect(selectProfileIsLoading(state as StateSchema)).toBe(false);
  });
});

import { selectProfileError } from "./selectProfileError";

describe("selectProfileError.test", () => {
  test("Should return profile error", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: "CATASTROPHE",
      },
    };
    expect(selectProfileError(state as StateSchema)).toBe("CATASTROPHE");
  });

  test("Should return undefined if profile state is empty", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectProfileError(state as StateSchema)).toBe(undefined);
  });
});

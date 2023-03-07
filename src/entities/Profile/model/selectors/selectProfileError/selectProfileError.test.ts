import { selectProfileError } from "./selectProfileError";

describe("selectProfileError.test", () => {
  test("Should return counter slice", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: "CATASTROPHE",
      },
    };
    expect(selectProfileError(state as StateSchema)).toBe("CATASTROPHE");
  });
});

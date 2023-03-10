import { selectProfileForm } from "./selectProfileForm";

describe("selectProfileForm.test", () => {
  test("Should return profile form", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: {
          age: 10,
        },
      },
    };
    expect(selectProfileForm(state as StateSchema)).toEqual({
      age: 10,
    });
  });

  test("Should return undefined if profile state is empty", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectProfileForm(state as StateSchema)).toBe(undefined);
  });
});

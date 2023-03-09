import { selectProfileForm } from "./selectProfileForm";

describe("selectProfileForm.test", () => {
  test("Should return counter slice", () => {
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
});

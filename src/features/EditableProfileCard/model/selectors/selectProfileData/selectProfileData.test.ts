import { selectProfileData } from "./selectProfileData";

describe("selectProfileData.test", () => {
  test("Should return profile data", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        profileData: {
          age: 10,
        },
      },
    };
    expect(selectProfileData(state as StateSchema)).toEqual({
      age: 10,
    });
  });

  test("Should return undefined if profile state is empty", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectProfileData(state as StateSchema)).toBe(undefined);
  });
});

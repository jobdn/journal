import { selectProfileData } from "./selectProfileData";

describe("selectProfileData.test", () => {
  test("Should return counter slice", () => {
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
});

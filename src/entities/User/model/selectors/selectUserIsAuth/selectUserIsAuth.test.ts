import { selectUserIsAuth } from "./selectUserIsAuth";

describe("selectUserIsAuth.test", () => {
  test("Should return user data", () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        isAuth: false,
      },
    };
    expect(selectUserIsAuth(state as StateSchema)).toBe(false);
  });
});

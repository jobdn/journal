import { selectPassword } from "./selectPassword";

describe("selectPassword.test", () => {
  test("Should return aut password", () => {
    const state: DeepPartial<StateSchema> = {
      auth: {
        password: "CATASTROPHE",
      },
    };
    expect(selectPassword(state as StateSchema)).toBe("CATASTROPHE");
  });

  test("Should return aut empty password string from empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectPassword(state as StateSchema)).toBe("");
  });
});

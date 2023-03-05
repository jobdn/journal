import { DeepPartial } from "@reduxjs/toolkit";
import { selectUsername } from "./selectUsername";

describe("selectUsername.test", () => {
  test("Should return username", () => {
    const state: DeepPartial<StateSchema> = {
      auth: {
        username: "Dan",
      },
    };
    expect(selectUsername(state as StateSchema)).toBe("Dan");
  });

  test("Should return empty username string from empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectUsername(state as StateSchema)).toBe("");
  });
});

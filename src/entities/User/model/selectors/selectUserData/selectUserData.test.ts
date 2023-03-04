import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/config/StoreProvider";
import { selectUserData } from "./selectUserData";

describe("selectUserData.test", () => {
  test("Should return user data", () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        userData: {
          username: "Dan",
          id: "1",
        },
      },
    };
    expect(selectUserData(state as StateSchema)).toEqual({
      username: "Dan",
      id: "1",
    });
  });
});

import { DeepPartial } from "@reduxjs/toolkit";
import { selectError } from "./selectError";

describe("selectError.test", () => {
  test("Should return aut error", () => {
    const state: DeepPartial<StateSchema> = {
      auth: {
        error: "CATASTROPHE",
      },
    };
    expect(selectError(state as StateSchema)).toBe("CATASTROPHE");
  });

  test("Should return aut empty string from empty state ", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectError(state as StateSchema)).toBe("");
  });
});

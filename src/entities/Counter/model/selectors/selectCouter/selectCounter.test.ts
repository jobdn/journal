import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/config/StoreProvider";
import { selectCounter } from "./selectCounter";

describe("selectCounter.test", () => {
  test("Should return counter slice", () => {
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 10,
      },
    };
    expect(selectCounter(state as StateSchema)).toEqual({ value: 10 });
  });
});
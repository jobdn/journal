import { DeepPartial } from "@reduxjs/toolkit";
import { StoreSchema } from "app/config/StoreProvider";
import { selectCounter } from "./selectCounter";

describe("selectCounter.test", () => {
  test("Should return counter slice", () => {
    const state: DeepPartial<StoreSchema> = {
      counter: {
        value: 10,
      },
    };
    expect(selectCounter(state as StoreSchema)).toEqual({ value: 10 });
  });
});

import { DeepPartial } from "@reduxjs/toolkit";
import { StoreSchema } from "app/config/StoreProvider";
import { selectValue } from "./selectValue";

describe("selectValue.test", () => {
  test("Should return value of counter slice", () => {
    const state: DeepPartial<StoreSchema> = {
      counter: {
        value: 10,
      },
    };
    expect(selectValue(state as StoreSchema)).toEqual(10);
  });
});

import { selectValue } from "./selectValue";

describe("selectValue.test", () => {
  test("Should return value of counter slice", () => {
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 10,
      },
    };
    expect(selectValue(state as StateSchema)).toEqual(10);
  });
});

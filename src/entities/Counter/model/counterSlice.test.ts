import { counterActions, counterReducer, CounterSchema } from "..";

describe("counterSlice.test", () => {
  test("should decrement state", () => {
    const counterState: CounterSchema = { value: 10 };

    expect(counterReducer(counterState, counterActions.decrement())).toEqual({
      value: 9,
    });
  });

  test("should increment state", () => {
    const counterState: CounterSchema = { value: 10 };

    expect(counterReducer(counterState, counterActions.increment())).toEqual({
      value: 11,
    });
  });

  test("should work with empty state", () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({
      value: 1,
    });
  });
});

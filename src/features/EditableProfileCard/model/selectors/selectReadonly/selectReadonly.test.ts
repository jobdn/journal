import { selectReadonly } from "./selectReadonly";

describe("selectReadonly.test", () => {
  test("Should return readonly profile flag", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: false,
      },
    };
    expect(selectReadonly(state as StateSchema)).toBe(false);
  });

  test("Should return undefined if profile state is empty", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectReadonly(state as StateSchema)).toBe(undefined);
  });
});

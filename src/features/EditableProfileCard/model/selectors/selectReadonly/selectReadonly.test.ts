import { selectReadonly } from "./selectReadonly";

describe("selectReadonly.test", () => {
  test("Should return counter slice", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: false,
      },
    };
    expect(selectReadonly(state as StateSchema)).toBe(false);
  });
});

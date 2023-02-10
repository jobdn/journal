import { cn } from "./classNames";

describe("classNames tests", () => {
  it("should return base class", () => {
    expect(cn("base", {}, [])).toBe("base");
    expect(cn("base base1", {}, [])).toBe("base base1");
  });

  it("should return base class with mods with true value", () => {
    expect(cn("base", { blue: true }, [])).toBe("base blue");
    expect(cn("base", { blue: true, big: true }, [])).toBe("base blue big");
  });

  it("should return base class with mods with true and false value", () => {
    expect(cn("base", { blue: true, big: false }, [])).toBe("base blue");
    expect(cn("base", { blue: undefined, big: false }, [])).toBe("base");
  });

  it("should return base class with mods and additional", () => {
    expect(cn("base", { blue: true }, ["additional"])).toBe(
      "base blue additional"
    );

    expect(cn("base", { blue: true }, [undefined])).toBe("base blue");
  });
});

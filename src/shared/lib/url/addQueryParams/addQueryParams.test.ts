import { getQueryParams } from "./addQueryParams";

describe("addQueryParams.test", () => {
  it("should return string with one search params", () => {
    const expectedParams = "?test=10";
    const receivedParams = getQueryParams({ test: "10" });
    console.log(expectedParams);

    expect(receivedParams).toBe(expectedParams);
  });

  it("should return string with two search params", () => {
    const expectedParams = "?test=10&two=2";
    const receivedParams = getQueryParams({ test: "10", two: "2" });
    expect(receivedParams).toBe(expectedParams);
  });

  it("should not add undefined to search params", () => {
    const expectedParams = "?test=10";
    const receivedParams = getQueryParams({ test: "10", two: undefined });
    expect(receivedParams).toBe(expectedParams);
  });
});

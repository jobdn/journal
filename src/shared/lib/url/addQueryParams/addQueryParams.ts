export const getQueryParams = (params: OptionalRecord<string, string>) => {
  const searchParams = new URLSearchParams(window.location.search);

  Object.entries(params).forEach((param) => {
    if (param[1] !== undefined) {
      searchParams.set(param[0], param[1]);
    }
  });
  const resultQueryString = `?${searchParams.toString()}`;
  return resultQueryString;
};

/**
 * Add search params to url
 * @param params - object like {one: "one", two: "two"} 👉 ?one=one&two=two
 */
export const addQueryParams = <T extends string>(
  params: OptionalRecord<T, string>
) => {
  window.history.pushState(null, "", getQueryParams(params));
};

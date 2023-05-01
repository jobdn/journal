import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { USER_DATA } from "shared/constants";

export const rtkApi = createApi({
  reducerPath: "rtkApi",
  baseQuery: fetchBaseQuery({
    baseUrl: __API__,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem(USER_DATA) || "";
      if (token) {
        headers.set("Authorization", token);
      }

      return headers;
    },
  }),
  endpoints: () => ({}),
});

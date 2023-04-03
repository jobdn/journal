import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  PageScroll,
  PageUrl,
  RememberScrollSchema,
} from "../../types/RememberScrollSchema";

const initialState: RememberScrollSchema = { pagesScrolls: {} };

export const rememberScrollSlice = createSlice({
  name: "rememberScrollSlice",
  initialState,
  reducers: {
    setPageScroll: (
      state,
      action: PayloadAction<{ page: PageUrl; scroll: PageScroll }>
    ) => {
      const { page, scroll } = action.payload;
      state.pagesScrolls[page] = scroll;
    },
  },
});

export const {
  actions: rememberScrollActions,
  reducer: rememberScrollReducer,
} = rememberScrollSlice;

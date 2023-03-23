import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AddCommentSchema } from "../../../types/AddCommentSchema";

const initialState: AddCommentSchema = {
  comment: "",
  error: undefined,
};

export const addCommentSlice = createSlice({
  name: "addComment",
  initialState,
  reducers: {
    setComment: (state, action: PayloadAction<string>) => {
      state.comment = action.payload;
    },
  },
});

export const { actions: addCommentActions, reducer: addCommentReducer } =
  addCommentSlice;

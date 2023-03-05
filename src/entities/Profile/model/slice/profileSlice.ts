import { createSlice } from "@reduxjs/toolkit";

import { ProfileSchema } from "../../types/ProfileSchema";

const initialState: ProfileSchema = {
  profileData: null,
  error: null,
  isLoading: false,
  readonly: true,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
});

export const { actions: profileActions, reducer: profileReducer } =
  profileSlice;

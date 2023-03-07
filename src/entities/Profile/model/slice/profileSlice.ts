import { createSlice } from "@reduxjs/toolkit";

import { ProfileSchema } from "../../types/ProfileSchema";
import { fetchProfileData } from "../thunks/fetchProfileData/fetchProfileData";

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
  extraReducers: (builder) => {
    builder.addCase(fetchProfileData.pending, (state) => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(fetchProfileData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.profileData = action.payload;
    });
    builder.addCase(fetchProfileData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload || "Default error";
    });
  },
});

export const { actions: profileActions, reducer: profileReducer } =
  profileSlice;

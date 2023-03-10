import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Profile } from "entities/Profile/types/Profile";
import { ProfileSchema } from "entities/Profile/types/ProfileSchema";

import { fetchProfileData } from "../service/fetchProfileData/fetchProfileData";
import { saveProfile } from "../service/saveProfile/saveProfile";

const initialState: ProfileSchema = {
  profileData: undefined,
  form: undefined,
  error: undefined,
  isLoading: false,
  readonly: true,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    cleanFormData: (state) => {
      state.form = state.profileData;
    },

    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload;
    },

    updateForm: (state, action: PayloadAction<DeepPartial<Profile>>) => {
      if (state.form) {
        state.form = {
          ...state.form,
          ...action.payload,
        };
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProfileData.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    });
    builder.addCase(fetchProfileData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.profileData = action.payload;
      state.form = action.payload;
    });
    builder.addCase(fetchProfileData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload || "Default error";
    });
    builder.addCase(saveProfile.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    });
    builder.addCase(saveProfile.fulfilled, (state, action) => {
      state.isLoading = false;
      state.profileData = action.payload;
      state.form = action.payload;
    });
    builder.addCase(saveProfile.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload || "Default error";
    });
  },
});

export const { actions: profileActions, reducer: profileReducer } =
  profileSlice;

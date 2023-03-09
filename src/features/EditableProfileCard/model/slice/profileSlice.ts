import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";

import { ProfileSchema } from "../../../../entities/Profile/types/ProfileSchema";
import { fetchProfileData } from "../thunks/fetchProfileData/fetchProfileData";
import { saveProfile } from "../thunks/saveProfile/saveProfile";

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
    setName: (state, action: PayloadAction<string>) => {
      if (state.form) {
        state.form.name = action.payload;
      }
    },
    setLastname: (state, action: PayloadAction<string>) => {
      if (state.form) {
        state.form.lastname = action.payload;
      }
    },
    setAge: (state, action: PayloadAction<number>) => {
      if (state.form) {
        state.form.age = action.payload;
      }
    },

    setCity: (state, action: PayloadAction<string>) => {
      if (state.form) {
        state.form.city = action.payload;
      }
    },

    cleanFormData: (state) => {
      state.form = state.profileData;
    },

    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload;
    },
    setAvatarLink: (state, action: PayloadAction<string>) => {
      if (state.form) {
        state.form.avatar = action.payload;
      }
    },
    setUsername: (state, action: PayloadAction<string>) => {
      if (state.form) {
        state.form.username = action.payload;
      }
    },
    setCountry: (state, action: PayloadAction<Country>) => {
      if (state.form) {
        state.form.country = action.payload;
      }
    },
    setCurrency: (state, action: PayloadAction<Currency>) => {
      if (state.form) {
        state.form.currency = action.payload;
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

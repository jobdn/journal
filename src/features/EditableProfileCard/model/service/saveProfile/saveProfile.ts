import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkOptions } from "app/config/StoreProvider";
import { Profile } from "../../../../../entities/Profile/types/Profile";
import i18next from "i18next";

export const saveProfile = createAsyncThunk<
  Profile,
  void,
  ThunkOptions<string>
>("profile/saveProfile", async (_, thunkApi) => {
  const { rejectWithValue, extra, getState } = thunkApi;
  try {
    const form = getState().profile?.form;
    const response = await extra.api.put<Profile>("/profile", form);

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (error) {
    return rejectWithValue(i18next.t("error.profile_loading"));
  }
});

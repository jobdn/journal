import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkOptions } from "app/config/StoreProvider";
import { Profile } from "../../../../../entities/Profile/types/Profile";
import i18next from "i18next";

export const fetchProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkOptions<string>
>("profile/fetchProfileData", async (_, thunkApi) => {
  const { rejectWithValue, extra } = thunkApi;
  try {
    const response = await extra.api.get<Profile>("/profile");

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (error) {
    return rejectWithValue(i18next.t("error.server_down"));
  }
});

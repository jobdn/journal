import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkOptions } from "app/config/StoreProvider";
import { Profile } from "../../../types/Profile";
import i18next from "i18next";
import { USER_DATA } from "shared/constants";

export const fetchProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkOptions<string>
>("auth/authByUsername", async (_, thunkApi) => {
  const { rejectWithValue, extra } = thunkApi;
  try {
    const response = await extra.api.get<Profile>("/profile");

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (error) {
    return rejectWithValue(i18next.t("error"));
  }
});

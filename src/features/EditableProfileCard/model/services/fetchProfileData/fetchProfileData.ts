import { createAsyncThunk } from "@reduxjs/toolkit";
import { Profile } from "entities/Profile";
import i18next from "i18next";
import { AxiosError } from "axios";

export const fetchProfileData = createAsyncThunk<
  Profile,
  string | undefined,
  ThunkOptions<string>
>("profile/fetchProfileData", async (profileId, thunkApi) => {
  const { rejectWithValue, extra } = thunkApi;
  try {
    if (!profileId) {
      return rejectWithValue(i18next.t("error.profile_id"));
    }

    const response = await extra.api.get<Profile>(`/profile/${profileId}`);

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (error) {
    const typedError = error as AxiosError;

    if (typedError?.response?.status === 404) {
      return rejectWithValue(i18next.t("error.profile_id"));
    }

    return rejectWithValue(i18next.t("error.server_down"));
  }
});

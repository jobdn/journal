import { createAsyncThunk } from "@reduxjs/toolkit";
import { Profile } from "entities/Profile";
import i18next from "i18next";

export const saveProfile = createAsyncThunk<
  Profile,
  string | undefined,
  ThunkOptions<string>
>("profile/saveProfile", async (profileId, thunkApi) => {
  const { rejectWithValue, extra, getState } = thunkApi;
  try {
    const form = getState().profile?.form;
    const response = await extra.api.put<Profile>(
      `/profile/${profileId}`,
      form
    );

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (error) {
    return rejectWithValue(i18next.t("error.profile_loading"));
  }
});

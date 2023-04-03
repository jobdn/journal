import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { User, userActions } from "entities/User";
import i18next from "i18next";
import { USER_DATA } from "shared/constants";

import { AuthByUsernameArgs } from "../../types/AuthByUsernameArgs";

export const authByUsername = createAsyncThunk<
  User,
  AuthByUsernameArgs,
  ThunkOptions<string>
>("auth/authByUsername", async ({ password, username }, thunkApi) => {
  const { rejectWithValue, dispatch, extra } = thunkApi;
  try {
    const response = await extra.api.post<User>("/login", {
      password,
      username,
    });

    if (!response.data) {
      throw new Error();
    }

    dispatch(userActions.setUserAuthData({ userAuthData: response.data }));
    localStorage.setItem(USER_DATA, JSON.stringify(response.data));

    return response.data;
  } catch (error) {
    const typedError = error as AxiosError;

    if (typedError?.response?.status === 403) {
      return rejectWithValue(i18next.t("error.incorrect_login"));
    }

    return rejectWithValue(i18next.t("error.server_down"));
  }
});

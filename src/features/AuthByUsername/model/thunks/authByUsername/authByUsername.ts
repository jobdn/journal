import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkOptions } from "app/config/StoreProvider";
import { AxiosError } from "axios";
import { User, userActions } from "entities/User";
import i18next from "i18next";
import { USER_DATA } from "shared/constants";

import { AuthByUsernameArgs } from "../../../types/AuthByUsernameArgs";
/**
 * Уже из этого создания authByUsername понятно, что createAsyncThunk возвращает функцию
 * и у нее есть тип AsyncThunk это тоже самое, что и AsyncThunkActionCreator ну а это, в свою очередь,
 * ровняется типу IsAny<T, True, False>, который возвращает , True
 *
 * Если проследовать по цепочке присваивания типов, по будет понятно, что createAsyncThunk возвращает фукнцию типа
 *
 * (arg: ThunkArg) => AsyncThunkAction<Returned, ThunkArg, ThunkApiConfig>
 */
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
      return rejectWithValue(i18next.t("incorrect_login"));
    }

    return rejectWithValue(i18next.t("server_down"));
  }
});

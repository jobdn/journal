import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { UserSchema } from "../../types/UserSchema";
import { User } from "../../types/User";
import { USER_DATA } from "shared/constants";

const storedUserData = JSON.parse(
  JSON.stringify(localStorage.getItem(USER_DATA))
);

const initialState: UserSchema = {
  userData: storedUserData,
  isAuth: storedUserData ? true : false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserAuthData: (state, action: PayloadAction<{ userAuthData: User }>) => {
      state.userData = action.payload.userAuthData;
      state.isAuth = true;
    },

    checkAuth: (state) => {
      const userData = localStorage.getItem(USER_DATA);

      if (userData) {
        state.userData = JSON.parse(userData);
        state.isAuth = true;
      }
    },

    logout: (state) => {
      state.userData = null;
      state.isAuth = false;
    },
  },
});

export const { actions: userActions, reducer: userReducer } = userSlice;

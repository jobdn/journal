import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { UserSchema } from "../types/UserSchema";
import { User } from "../types/User";
import { USER_DATA } from "shared/constants";

const initialState: UserSchema = {
  userData: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserAuthData: (state, action: PayloadAction<{ userAuthData: User }>) => {
      state.userData = action.payload.userAuthData;
    },

    checkAuth: (state) => {
      const userData = localStorage.getItem(USER_DATA);

      if (userData) {
        state.userData = JSON.parse(userData);
      }
    },

    logout: (state) => {
      state.userData = null;
    },
  },
});

export const { actions: userActions, reducer: userReducer } = userSlice;

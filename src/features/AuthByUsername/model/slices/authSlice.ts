import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AuthSchema } from "../types/AuthSchema";
import { authByUsername } from "../thunks/authByUsername/authByUsername";

const initialState: AuthSchema = {
  isLoading: false,
  password: "",
  username: "",
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<{ username: string }>) => {
      state.username = action.payload.username;
    },
    setPassword: (state, action: PayloadAction<{ password: string }>) => {
      state.password = action.payload.password;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(authByUsername.pending, (state) => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(authByUsername.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(authByUsername.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload || "Default Error";
    });
  },
});

export const { actions: authActions, reducer: authReducer } = authSlice;

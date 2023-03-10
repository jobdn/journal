import { AuthSchema } from "../../types/AuthSchema";
import { authByUsername } from "../thunks/authByUsername/authByUsername";
import { authActions, authReducer } from "./authSlice";

describe("authSlice.test", () => {
  const initialState: AuthSchema = {
    isLoading: false,
    password: "",
    username: "",
    error: null,
  };

  it("Should set password", () => {
    // Tests to set username are similar to these
    const authState: DeepPartial<AuthSchema> = { password: "" };
    expect(
      authReducer(
        authState as AuthSchema,
        authActions.setPassword({ password: "123" })
      )
    ).toEqual({ password: "123" });
  });

  it("Should test empty slice", () => {
    expect(
      authReducer(undefined, authActions.setPassword({ password: "123" }))
    ).toEqual({ ...initialState, password: "123" });
  });

  // Async reducers
  it("should change isLoading flag to true", () => {
    expect(authReducer(undefined, authByUsername.pending)).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it("should test fulfilled version of authByUsername", () => {
    expect(
      authReducer(
        initialState,
        authByUsername.fulfilled(
          { id: "1", username: "Dan" },
          "auth/authByUsername/fulfilled",
          { password: "123", username: "Dan" }
        )
      )
    ).toEqual({
      password: "",
      username: "",
      isLoading: false,
      error: null,
    });
  });
});

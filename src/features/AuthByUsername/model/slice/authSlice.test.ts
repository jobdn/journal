import { DeepPartial } from "@reduxjs/toolkit";
import { AuthSchema } from "../../types/AuthSchema";
import { authActions, authReducer } from "./authSlice";

describe("authSlice.test", () => {
  it("", () => {
    const authState: DeepPartial<AuthSchema> = { password: "" };
    expect(
      authReducer(
        authState as AuthSchema,
        authActions.setPassword({ password: "123" })
      )
    ).toEqual({ password: "123" });
  });
});

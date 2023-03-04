import { FC, lazy } from "react";
import { AuthFormProps } from "./AuthForm";

export const AsyncAuthForm = lazy<FC<AuthFormProps>>(
  () =>
    //@ts-ignore
    new Promise((res) => setTimeout(() => res(import("./AuthForm")), 2000))
);

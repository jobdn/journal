import { ButtonHTMLAttributes } from "react";

export enum ButtonVariant {
  CLEAR = "clear",
  CLEAR_INVERTED = "clearInverted",
  OUTLINED = "outlined",
  FILLED = "filled",
  FILLED_DANGER = "filled-danger",
  FILLED_SUCCESS = "filled-success",
  FILLED_INVERTED = "filled-inverted",
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
}

import { ButtonHTMLAttributes } from "react";
export enum ButtonThemes {
  CLEAR = "clear",
  OUTLINED = "outlined",
  FILLED = "filled",
  FILLED_INVERTED = "filled-inverted",
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonThemes;
}

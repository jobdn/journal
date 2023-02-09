import { ButtonHTMLAttributes } from "react";
export enum ButtonThemes {
  CLEAR = "clear",
  FILLED = "filled",
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonThemes;
}

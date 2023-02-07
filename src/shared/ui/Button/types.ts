import { ButtonHTMLAttributes, HTMLAttributes } from "react";
export enum ButtonThemes {
  CLEAR = "clear",
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonThemes;
}

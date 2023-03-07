import { InputHTMLAttributes } from "react";

export type InputVariants = "fullWidth" | "default";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> {
  className?: string;
  value: string;
  onChange?: (value: string) => void;
  autoFocused?: boolean;
  variant?: InputVariants;
}

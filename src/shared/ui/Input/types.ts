import { InputHTMLAttributes } from "react";

export type InputVariants = "fullWidth" | "default";

export interface InputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "value" | "onChange" | "readOnly"
  > {
  className?: string;
  value: string | number;
  onChange?: (value: string) => void;
  autoFocused?: boolean;
  variant?: InputVariants;
  readonly?: boolean;
}

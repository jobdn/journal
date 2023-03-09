import { SelectHTMLAttributes } from "react";

export interface Option {
  value: string;
  text: string;
}

export interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "onChange"> {
  className?: string;
  label?: string;
  options: Option[];
  onChange?: (value: string) => void;
}

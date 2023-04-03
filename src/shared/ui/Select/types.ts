import { SelectHTMLAttributes } from "react";

export interface Option<T> {
  value: T;
  text: string;
}

export type SelectOptions<T> = Option<T>[];

export interface SelectProps<T extends string>
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "onChange"> {
  className?: string;
  label?: string;
  options: SelectOptions<T>;
  value: T;
  onChange?: (value: T) => void;
}

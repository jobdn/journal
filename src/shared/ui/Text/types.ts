export type TextVariant = "error" | "primary";

export interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  variant?: TextVariant;
}

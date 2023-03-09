export type TextVariant = "error" | "primary";
export type TextAlign = "left" | "center" | "right";

export interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  variant?: TextVariant;
  align?: TextAlign;
}

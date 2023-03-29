export type TextVariant = "error" | "primary";
export type TextAlign = "left" | "center" | "right";
export type TextSize = "m" | "l";

export interface TextProps {
  className?: string;
  titleClassName?: string;
  textClassName?: string;
  title?: string;
  text?: string;
  variant?: TextVariant;
  align?: TextAlign;
  size?: TextSize;
}

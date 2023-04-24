export type FlexJustify = "start" | "center" | "end" | "between";
export type FlexAlign = "start" | "center" | "end" | "stretch";
export type FlexGap = "4" | "8" | "16" | "32";
export type FlexDirection = "row" | "column";

export interface FlexProps {
  className?: string;
  align?: FlexAlign;
  justify?: FlexJustify;
  direction?: FlexDirection;
  gap?: FlexGap;
  full?: boolean;
}

import { FlexAlign, FlexDirection, FlexGap, FlexJustify } from "./types";
import classes from "./Flex.module.scss";

export const justifyMap: Record<FlexJustify, string> = {
  start: classes.justifyStart,
  center: classes.justifyCenter,
  end: classes.justifyEnd,
  between: classes.justifyBetween,
};

export const alignMap: Record<FlexAlign, string> = {
  start: classes.alignStart,
  center: classes.alignCenter,
  end: classes.alignEnd,
};

export const directionMap: Record<FlexDirection, string> = {
  row: classes.flexRow,
  column: classes.flexColumn,
};

export const gapMap: Record<FlexGap, string> = {
  "4": classes.gap4,
  "8": classes.gap8,
  "16": classes.gap16,
  "32": classes.gap32,
};

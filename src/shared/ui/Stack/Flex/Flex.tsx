import React from "react";
import { cn } from "shared/lib";

import classes from "./Flex.module.scss";
import { FlexProps } from "./types";
import { alignMap, directionMap, gapMap, justifyMap } from "./mappers";

export const Flex: React.FC<FlexProps> = (props) => {
  const {
    className,
    children,
    align = "center",
    justify = "start",
    direction = "row",
    gap,
    full,
  } = props;

  const flexClasses = [
    className,
    justifyMap[justify],
    alignMap[align],
    directionMap[direction],
    gap && gapMap[gap],
  ];

  const mods = { [classes.fullWidth]: full };

  return <div className={cn(classes.Flex, mods, flexClasses)}>{children}</div>;
};

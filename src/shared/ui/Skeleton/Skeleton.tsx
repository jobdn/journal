import React, { HTMLAttributes } from "react";
import { cn } from "shared/lib";

import classes from "./Skeleton.module.scss";

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  variant?: "square" | "circle";
  width?: string | number;
  height: string | number;
  borderRadius?: string | number;
}

export const Skeleton: React.FC<SkeletonProps> = (props) => {
  const {
    className,
    variant = "square",
    width = "100%",
    height,
    borderRadius,
    style,
    ...restProps
  } = props;

  const skeletonStyles: React.CSSProperties = {
    width,
    height,
    borderRadius,
    ...style,
  };

  return (
    <div
      style={skeletonStyles}
      className={cn(classes.Skeleton, {}, [className, classes[variant]])}
      {...restProps}
    ></div>
  );
};

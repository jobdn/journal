import React from "react";
import { cn } from "shared/lib";

import classes from "./Skeleton.module.scss";

interface SkeletonProps {
  className?: string;
  variant?: "square" | "circle";
  width?: string | number;
  height: string | number;
  borderRadius?: string;
}

export const Skeleton: React.FC<SkeletonProps> = (props) => {
  const { className, variant = "square", width, height, borderRadius } = props;

  const skeletonStyles: React.CSSProperties = {
    width,
    height,
    borderRadius,
  };

  return (
    <div
      style={skeletonStyles}
      className={cn(classes.Skeleton, {}, [className, classes[variant]])}
    ></div>
  );
};

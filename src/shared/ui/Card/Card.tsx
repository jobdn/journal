import React, { HTMLAttributes } from "react";
import { cn } from "shared/lib";

import classes from "./Card.module.scss";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  variant?: "default" | "outlined";
}

export const Card: React.FC<CardProps> = (props) => {
  const { className, children, variant = "default", ...otherProps } = props;

  return (
    <div
      className={cn(classes.Card, {}, [className, classes[variant]])}
      {...otherProps}
    >
      {children}
    </div>
  );
};

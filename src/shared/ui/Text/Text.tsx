import React from "react";
import { cn } from "shared/lib";

import classes from "./Text.module.scss";
import { TextProps } from "./types";

export const Text = React.memo(
  React.forwardRef<HTMLDivElement, TextProps>(function Text(props, ref) {
    const {
      className,
      titleClassName,
      textClassName,
      text,
      title,
      variant = "primary",
      align = "left",
      size = "m",
    } = props;
    return (
      <div
        className={cn(classes.Text, {}, [
          className,
          classes[variant],
          classes[align],
          classes[size],
        ])}
        ref={ref}
      >
        {title && (
          <p className={cn(classes.title, {}, [titleClassName])}>{title}</p>
        )}
        {text && (
          <p className={cn(classes.text, {}, [textClassName])}>{text}</p>
        )}
      </div>
    );
  })
);

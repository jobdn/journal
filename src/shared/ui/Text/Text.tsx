import React from "react";
import { cn } from "shared/lib";

import classes from "./Text.module.scss";
import { TextProps } from "./types";

export const Text: React.FC<TextProps> = (props) => {
  const { className, text, title, variant = "primary" } = props;
  return (
    <div className={cn(classes.Text, {}, [className, classes[variant]])}>
      {title && <p className={classes.title}>{title}</p>}
      {text && <p className={classes.text}>{text}</p>}
    </div>
  );
};

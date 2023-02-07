import React from "react";
import { cn } from "shared/lib/classNames";

import classes from "./Button.module.scss";
import { ButtonProps } from "./types";

export const Button: React.FC<ButtonProps> = (props) => {
  const { className, children, theme, ...restProps } = props;
  return (
    <button
      className={cn(classes.Button, {}, [className, classes[theme]])}
      {...restProps}
    >
      {children}
    </button>
  );
};

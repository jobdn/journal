import React from "react";
import { cn } from "shared/lib";

import classes from "./Button.module.scss";
import { ButtonProps } from "./types";

export const Button: React.FC<ButtonProps> = React.memo(function Button(props) {
  const { className, children, theme, ...restProps } = props;

  const additionalClasses = [className, classes[theme]];

  return (
    <button
      className={cn(classes.Button, {}, additionalClasses)}
      {...restProps}
    >
      {children}
    </button>
  );
});

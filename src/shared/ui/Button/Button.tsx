import React from "react";
import { cn } from "shared/lib";
import { ButtonVariant } from ".";

import classes from "./Button.module.scss";
import { ButtonProps } from "./types";

export const Button: React.FC<ButtonProps> = React.memo(function Button(props) {
  const {
    className,
    children,
    variant = ButtonVariant.CLEAR,
    ...restProps
  } = props;

  const additionalClasses = [className, classes[variant]];

  return (
    <button
      className={cn(classes.Button, {}, additionalClasses)}
      {...restProps}
    >
      {children}
    </button>
  );
});

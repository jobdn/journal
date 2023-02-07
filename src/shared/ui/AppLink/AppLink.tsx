import React from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

import { cn } from "shared/lib/classNames";

import classes from "./AppLink.module.scss";
import { AppLinkProps, AppLinkThemes } from "./types";

export const AppLink: React.FC<AppLinkProps> = (props) => {
  const {
    className,
    to,
    children,
    theme = AppLinkThemes.PRIMARY,
    ...restProps
  } = props;

  return (
    <NavLink
      to={to}
      className={cn(classes.AppLink, {}, [className, classes[theme]])}
      {...restProps}
    >
      {children}
    </NavLink>
  );
};

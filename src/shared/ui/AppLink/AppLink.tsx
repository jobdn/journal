import React from "react";
import { NavLink } from "react-router-dom";

import { cn } from "shared/lib";

import classes from "./AppLink.module.scss";
import { AppLinkProps, AppLinkThemes } from "./types";

export const AppLink: React.FC<AppLinkProps> = React.memo(function AppLink(
  props
) {
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
});

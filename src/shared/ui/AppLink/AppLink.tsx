import React from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

import { cn } from "shared/lib/classNames";

import classes from "./AppLink.module.scss";

export enum AppLinkThemes {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  OUTLINED = "outlined",
}

interface AppLinkProps extends NavLinkProps {
  theme?: AppLinkThemes;
  className?: string;
}

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

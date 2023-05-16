import { forwardRef, memo } from "react";
import { NavLink } from "react-router-dom";

import { cn } from "shared/lib";

import classes from "./AppLink.module.scss";
import { AppLinkProps, AppLinkVariants } from "./types";

export const AppLink = memo(
  forwardRef<HTMLAnchorElement, AppLinkProps>(function AppLink(props, ref) {
    const {
      className,
      to,
      children,
      variant = AppLinkVariants.PRIMARY,
      ...restProps
    } = props;

    return (
      <NavLink
        to={to}
        className={cn(classes.AppLink, {}, [className, classes[variant]])}
        ref={ref}
        {...restProps}
      >
        {children}
      </NavLink>
    );
  })
);

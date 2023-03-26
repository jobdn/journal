import { NavLinkProps } from "react-router-dom";

export enum AppLinkVariants {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export interface AppLinkProps extends NavLinkProps {
  variant?: AppLinkVariants;
  className?: string;
}

import { NavLinkProps } from "react-router-dom";

export enum AppLinkThemes {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  OUTLINED = "outlined",
}

export interface AppLinkProps extends NavLinkProps {
  theme?: AppLinkThemes;
  className?: string;
}

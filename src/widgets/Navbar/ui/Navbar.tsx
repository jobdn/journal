import React from "react";

import classes from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = () => {
  return <nav className={classes.Navbar}></nav>;
};

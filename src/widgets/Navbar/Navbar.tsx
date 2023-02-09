import React from "react";

import { AppLink } from "shared/ui/AppLink";

import classes from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className={classes.Navbar}>
      <div className={classes.links}>
        <AppLink className={classes.link} to={"/"}>
          Home
        </AppLink>
        <AppLink className={classes.link} to={"/about"}>
          About
        </AppLink>
      </div>
    </nav>
  );
};

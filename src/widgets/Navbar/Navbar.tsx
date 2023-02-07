import React from "react";

import { AppLink } from "shared/ui/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

import classes from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <nav className={classes.Navbar}>
      <ThemeSwitcher />
      <div className={classes.links}>
        <AppLink className={classes.link} to={"/home"}>
          Home
        </AppLink>
        <AppLink className={classes.link} to={"/about"}>
          About
        </AppLink>
        <AppLink className={classes.link} to={"/"}>
          MAIN
        </AppLink>
      </div>
    </nav>
  );
};

import React from "react";
import { useTranslation } from "react-i18next";

import { AppLink } from "shared/ui/AppLink";

import classes from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const { t } = useTranslation();
  return (
    <nav className={classes.Navbar}>
      <div className={classes.links}>
        <AppLink className={classes.link} to={"/"}>
          {t("navbar.home")}
        </AppLink>
        <AppLink className={classes.link} to={"/about"}>
          {t("navbar.about")}
        </AppLink>
      </div>
    </nav>
  );
};

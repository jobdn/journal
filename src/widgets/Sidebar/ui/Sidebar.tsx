import React from "react";
import { useTranslation } from "react-i18next";

import { LangSwitcher } from "widgets/LangSwitcher";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { Button, ButtonThemes } from "shared/ui/Button";
import { AppLink } from "shared/ui/AppLink";
import { cn } from "shared/lib";

import classes from "./Sidebar.module.scss";

import ExpandIcon from "../assets/expand.svg";
import CollapseIcon from "../assets/collapse.svg";
import AboutIcon from "../assets/about.svg";
import HomeIcon from "../assets/home.svg";
import { RoutePaths } from "shared/config/router";

interface SidebarProps {
  className?: string;
}

enum SidebarVariants {
  COLLAPSED = "collapsed",
  EXPANDED = "expanded",
}

const SIDEBAR_STATE = "sidebar-state";
const sidebarIsCollapsed =
  localStorage.getItem(SIDEBAR_STATE) === SidebarVariants.COLLAPSED
    ? true
    : false;

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = React.useState(sidebarIsCollapsed);
  const { t } = useTranslation();

  const handleToggle = () => {
    setCollapsed((prevCollapsed) => {
      if (prevCollapsed) {
        localStorage.setItem(SIDEBAR_STATE, SidebarVariants.EXPANDED);
      } else {
        localStorage.setItem(SIDEBAR_STATE, SidebarVariants.COLLAPSED);
      }
      return !prevCollapsed;
    });
  };

  return (
    <aside
      data-testid="sidebar"
      className={cn(classes.Sidebar, { [classes.collapsed]: collapsed }, [
        className,
      ])}
    >
      <div className={classes.menu}>
        <Button
          onClick={handleToggle}
          theme={ButtonThemes.CLEAR}
          className={cn(classes.menuItem, {}, [classes.hiddenOnTablet])}
        >
          {collapsed ? (
            <ExpandIcon className={cn(classes.menuItemIcon, {}, ["icon"])} />
          ) : (
            <CollapseIcon className={cn(classes.menuItemIcon, {}, ["icon"])} />
          )}
          <span className={classes.menuItemText}>
            {collapsed ? t("sidebar.expandIcon") : t("sidebar.collapseIcon")}
          </span>
        </Button>
        <AppLink to={RoutePaths.home} className={classes.menuItem}>
          <HomeIcon className={cn(classes.menuItemIcon, {}, ["icon"])} />
          <span className={classes.menuItemText}>{t("sidebar.home")}</span>
        </AppLink>
        <AppLink to={RoutePaths.about} className={classes.menuItem}>
          <AboutIcon className={cn(classes.menuItemIcon, {}, ["icon"])} />
          <span className={classes.menuItemText}>{t("sidebar.about")}</span>
        </AppLink>
      </div>
      <div
        className={cn(
          classes.switchers,
          { [classes.switchers_vertical]: collapsed },
          []
        )}
      >
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </aside>
  );
};

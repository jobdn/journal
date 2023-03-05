import React from "react";

import { LangSwitcher } from "widgets/LangSwitcher";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { cn } from "shared/lib";

import classes from "./Sidebar.module.scss";

import { SidebarVariants } from "../../types/SidebarVariants";
import { SidebarMenu } from "../SidebarMenu/SidebarMenu";

interface SidebarProps {
  className?: string;
}

const SIDEBAR_STATE = "sidebar-state";
const sidebarIsCollapsed =
  localStorage.getItem(SIDEBAR_STATE) === SidebarVariants.COLLAPSED
    ? true
    : false;

export const Sidebar: React.FC<SidebarProps> = React.memo(function Sidebar({
  className,
}) {
  const [collapsed, setCollapsed] = React.useState(sidebarIsCollapsed);

  const onToggle = React.useCallback(() => {
    setCollapsed((prevCollapsed) => {
      if (prevCollapsed) {
        localStorage.setItem(SIDEBAR_STATE, SidebarVariants.EXPANDED);
      } else {
        localStorage.setItem(SIDEBAR_STATE, SidebarVariants.COLLAPSED);
      }
      return !prevCollapsed;
    });
  }, []);

  return (
    <aside
      data-testid="sidebar"
      className={cn(classes.Sidebar, { [classes.collapsed]: collapsed }, [
        className,
      ])}
    >
      <SidebarMenu collapsed={collapsed} onToggle={onToggle} />
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
});

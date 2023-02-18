import React from "react";
import { useTranslation } from "react-i18next";

import { cn } from "shared/lib/classNames";
import { LangSwitcher } from "widgets/LangSwitcher";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

import classes from "./Sidebar.module.scss";

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

  const switchersRef = React.useRef<HTMLDivElement>(null);

  const handleTransitionEnd: React.TransitionEventHandler<HTMLDivElement> =
    () => {
      if (collapsed) {
        switchersRef.current.style.flexDirection = "column";
      } else {
        switchersRef.current.style.flexDirection = "row";
      }
    };

  return (
    <aside
      data-testid="sidebar"
      className={cn(classes.Sidebar, { [classes.collapsed]: collapsed }, [
        className,
      ])}
      onTransitionEnd={handleTransitionEnd}
    >
      <button onClick={handleToggle}>{t("toggle")}</button>
      <div
        className={cn(
          classes.switchers,
          { [classes.switchers_vertical]: collapsed },
          []
        )}
        ref={switchersRef}
      >
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </aside>
  );
};

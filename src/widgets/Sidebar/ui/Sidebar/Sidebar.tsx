import React from "react";

import { cn } from "shared/lib/classNames";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

import classes from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = React.useState(false);

  const handleToggle = () => {
    setCollapsed((prevCollapsed) => !prevCollapsed);
  };

  return (
    <div
      className={cn(classes.Sidebar, { [classes.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={handleToggle}>toggle</button>
      <div className={classes.switchers}>
        <ThemeSwitcher />
        {/* LanguageSwitcher */}
      </div>
    </div>
  );
};

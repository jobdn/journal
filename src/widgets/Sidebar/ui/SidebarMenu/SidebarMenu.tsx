import React from "react";
import { useTranslation } from "react-i18next";
import { cn } from "shared/lib";

import { Button, ButtonThemes } from "shared/ui/Button";

import ExpandIcon from "../../assets/expand.svg";
import CollapseIcon from "../../assets/collapse.svg";

import classes from "./SidebarMenu.module.scss";
import { SidebarMenuItem } from "../SidebarMenuItem/SidebarMenuItem";
import { sidebarItemList } from "widgets/Sidebar/constants/sidebarItemList";

interface SidebarMenuProps {
  className?: string;
  onToggle: () => void;
  collapsed: boolean;
}

export const SidebarMenu: React.FC<SidebarMenuProps> = React.memo(
  function SidebarMenu({ className, onToggle, collapsed }) {
    const { t } = useTranslation();

    const menuList = React.useMemo(
      () =>
        sidebarItemList.map((item) => (
          <SidebarMenuItem
            key={item.path}
            iconClassName={classes.SidebarMenuItemIcon}
            itemClassName={classes.SidebarMenuItem}
            textClassName={classes.SidebarMenuItemText}
            item={item}
          />
        )),
      []
    );

    return (
      <div
        className={cn(classes.SidebarMenu, { [classes.collapsed]: collapsed }, [
          className,
        ])}
      >
        <Button
          onClick={onToggle}
          theme={ButtonThemes.CLEAR}
          className={cn(classes.SidebarMenuItem, {}, [classes.hiddenOnTablet])}
        >
          {collapsed ? (
            <ExpandIcon
              className={cn(classes.SidebarMenuItemIcon, {}, ["icon"])}
            />
          ) : (
            <CollapseIcon
              className={cn(classes.SidebarMenuItemIcon, {}, ["icon"])}
            />
          )}
          <span className={classes.SidebarMenuItemText}>
            {collapsed ? t("sidebar.expandIcon") : t("sidebar.collapseIcon")}
          </span>
        </Button>
        {menuList}
      </div>
    );
  }
);

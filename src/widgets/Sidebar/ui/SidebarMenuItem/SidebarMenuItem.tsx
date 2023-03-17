import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { selectUserData } from "entities/User";
import { cn } from "shared/lib";
import { AppLink } from "shared/ui/AppLink";

import type { SidebarItemType } from "../../types/SidebarItemType";

interface SidebarItemProps {
  item: SidebarItemType;
  itemClassName: string;
  iconClassName: string;
  textClassName: string;
}

export const SidebarMenuItem: React.FC<SidebarItemProps> = React.memo(
  function SidebarMenuItem(props) {
    const { t } = useTranslation();
    const { item, iconClassName, itemClassName, textClassName } = props;
    const isAuth = useSelector(selectUserData);

    if (!isAuth && item.authOnly) return null;

    return (
      <AppLink to={item.path} className={cn("", {}, [itemClassName])}>
        <item.Icon className={cn("", {}, ["inverted-icon", iconClassName])} />
        <span className={textClassName}>{t(item.translation)}</span>
      </AppLink>
    );
  }
);

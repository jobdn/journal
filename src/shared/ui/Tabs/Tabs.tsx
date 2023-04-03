import React from "react";
import { cn } from "shared/lib";
import { Card } from "../Card";

import classes from "./Tabs.module.scss";

export interface TabItem {
  value: string;
  content: string;
}

interface TabsProps {
  className?: string;
  tabs: TabItem[];
  activeTab?: string;
  onTabClick: (tab: TabItem) => void;
}

export const Tabs: React.FC<TabsProps> = (props) => {
  const { className, tabs, activeTab, onTabClick } = props;

  const handleTabClick = React.useCallback(
    (tab: TabItem) => () => {
      onTabClick(tab);
    },
    [onTabClick]
  );

  return (
    <div className={cn(classes.Tabs, {}, [className])}>
      {tabs.map((tab) => (
        <Card
          key={tab.value}
          className={classes.tab}
          variant={activeTab === tab.value ? "outlined" : "default"}
          onClick={handleTabClick(tab)}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
};

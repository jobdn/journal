import React from "react";
import { useTranslation } from "react-i18next";
import { cn } from "shared/lib";

import classes from "./ToggleArticleListView.module.scss";
import TileIcon from "./assets/tile.svg";
import ListIcon from "./assets/list.svg";

import { ArticleListView } from "entities/Article";
import { Button } from "shared/ui/Button";

interface ToggleArticleListViewProps {
  className?: string;
  onToggleArticleListView: (view: ArticleListView) => void;
  currentView: ArticleListView;
}

interface TogglerItem {
  type: ArticleListView;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

const togglers: TogglerItem[] = [
  {
    type: "list",
    Icon: ListIcon,
  },
  { type: "tile", Icon: TileIcon },
];

export const ToggleArticleListView: React.FC<ToggleArticleListViewProps> = (
  props
) => {
  const { className, onToggleArticleListView, currentView } = props;

  const handleToggleView = (newView: ArticleListView) => () => {
    onToggleArticleListView(newView);
  };

  return (
    <div className={cn(classes.ToggleArticleListView, {}, [className])}>
      {togglers.map((icon) => (
        <Button key={icon.type} onClick={handleToggleView(icon.type)}>
          <icon.Icon
            className={cn(
              "icon",
              { [classes["active"]]: icon.type === currentView },
              []
            )}
          />
        </Button>
      ))}
    </div>
  );
};

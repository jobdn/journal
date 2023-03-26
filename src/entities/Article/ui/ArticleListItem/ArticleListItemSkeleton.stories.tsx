import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook";
import { Theme } from "shared/config/theme";

import { ArticleListItemSkeleton } from "./ArticleListItemSkeleton";

export default {
  title: "entities/ArticleListItemSkeleton",
  component: ArticleListItemSkeleton,
} as ComponentMeta<typeof ArticleListItemSkeleton>;

const ArticleListItemSkeletonTemplate: ComponentStory<
  typeof ArticleListItemSkeleton
> = (args) => <ArticleListItemSkeleton {...args} />;

export const TileItemSkeleton = ArticleListItemSkeletonTemplate.bind({});
TileItemSkeleton.args = {
  view: "tile",
};

export const TileItemSkeletonDark = ArticleListItemSkeletonTemplate.bind({});
TileItemSkeletonDark.args = {
  view: "tile",
};
TileItemSkeletonDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ListItemSkeleton = ArticleListItemSkeletonTemplate.bind({});
ListItemSkeleton.args = {
  view: "list",
};

export const ListItemSkeletonDark = ArticleListItemSkeletonTemplate.bind({});
ListItemSkeletonDark.args = {
  view: "list",
};

ListItemSkeletonDark.decorators = [ThemeDecorator(Theme.DARK)];

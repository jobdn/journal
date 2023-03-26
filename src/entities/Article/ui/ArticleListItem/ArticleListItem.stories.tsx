import { ComponentMeta, ComponentStory } from "@storybook/react";

import {
  RouterDecorator,
  StoreDecorator,
  ThemeDecorator,
} from "shared/config/storybook";
import { Theme } from "shared/config/theme";

import { ArticleListItem } from "./ArticleListItem";

import { article } from "../../constants/article";

export default {
  title: "entities/ArticleListItem",
  component: ArticleListItem,
  decorators: [StoreDecorator(), RouterDecorator],
} as ComponentMeta<typeof ArticleListItem>;

const ArticleListItemTemplate: ComponentStory<typeof ArticleListItem> = (
  args
) => <ArticleListItem {...args} />;

export const TileItem = ArticleListItemTemplate.bind({});
TileItem.args = {
  article,
  view: "tile",
};

export const TileItemDark = ArticleListItemTemplate.bind({});
TileItemDark.args = {
  article,
  view: "tile",
};
TileItemDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ListItem = ArticleListItemTemplate.bind({});
ListItem.args = {
  article,
  view: "list",
};

export const ListItemDark = ArticleListItemTemplate.bind({});
ListItemDark.args = {
  article,
  view: "list",
};

ListItemDark.decorators = [ThemeDecorator(Theme.DARK)];

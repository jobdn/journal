import { ComponentMeta, ComponentStory } from "@storybook/react";
import { article } from "entities/Article";

import { RouterDecorator, ThemeDecorator } from "shared/config/storybook";
import { Theme } from "shared/config/theme";

import { ArticleList } from "./ArticleList";

export default {
  title: "entities/ArticleList",
  component: ArticleList,
  decorators: [RouterDecorator],
} as ComponentMeta<typeof ArticleList>;

const ArticleListTemplate: ComponentStory<typeof ArticleList> = (args) => (
  <ArticleList {...args} />
);

export const Dark = ArticleListTemplate.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
Dark.args = {
  articleList: Array(10)
    .fill(0)
    .map((_, index) => ({ ...article, id: String(index) })),
};

export const Light = ArticleListTemplate.bind({});
Light.args = {
  articleList: Array(10)
    .fill(0)
    .map((_, index) => ({ ...article, id: String(index) })),
};

export const Empty = ArticleListTemplate.bind({});

export const IsLoadingList = ArticleListTemplate.bind({});
IsLoadingList.args = {
  isLoading: true,
  view: "list",
};
export const IsLoadingTile = ArticleListTemplate.bind({});
IsLoadingTile.args = {
  isLoading: true,
  view: "tile",
};

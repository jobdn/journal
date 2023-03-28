import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook";
import { Theme } from "shared/config/theme";

import { ToggleArticleListView } from "./ToggleArticleListView";

export default {
  title: "/ToggleArticleListView",
  component: ToggleArticleListView,
} as ComponentMeta<typeof ToggleArticleListView>;

const ToggleArticleListViewTemplate: ComponentStory<
  typeof ToggleArticleListView
> = (args) => <ToggleArticleListView {...args} />;

export const Dark = ToggleArticleListViewTemplate.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
export const Light = ToggleArticleListViewTemplate.bind({});

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook";
import { Theme } from "shared/config/theme";

import ArticlesPage from "./ArticlesPage";

export default {
  title: "/ArticlesPage",
  component: ArticlesPage,
} as ComponentMeta<typeof ArticlesPage>;

const ArticlesPageTemplate: ComponentStory<typeof ArticlesPage> = (args) => (
  <ArticlesPage {...args} />
);

export const Dark = ArticlesPageTemplate.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
export const Light = ArticlesPageTemplate.bind({});

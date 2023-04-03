import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook";
import { Theme } from "shared/config/theme";

import { ArticlesSelector } from "./ArticlesSelector";

export default {
  title: "features/ArticlesSelector",
  component: ArticlesSelector,
} as ComponentMeta<typeof ArticlesSelector>;

const SelectArticlesByTemplate: ComponentStory<typeof ArticlesSelector> = (
  args
) => <ArticlesSelector {...args} />;

export const Dark = SelectArticlesByTemplate.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Light = SelectArticlesByTemplate.bind({});

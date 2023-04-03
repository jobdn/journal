import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook";
import { Theme } from "shared/config/theme";

import { ArticlesFilter } from "./ArticlesFilter";

export default {
  title: "widgets/ArticlesFilter",
  component: ArticlesFilter,
} as ComponentMeta<typeof ArticlesFilter>;

const ArticlesFilterTemplate: ComponentStory<typeof ArticlesFilter> = (
  args
) => <ArticlesFilter {...args} />;

export const Dark = ArticlesFilterTemplate.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
export const Light = ArticlesFilterTemplate.bind({});

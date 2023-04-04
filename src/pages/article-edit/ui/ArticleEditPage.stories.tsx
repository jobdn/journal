import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook";
import { Theme } from "shared/config/theme";

import { ArticleEditPage } from "./ArticleEditPage";

export default {
  title: "pages/ArticleEditPage",
  component: ArticleEditPage,
} as ComponentMeta<typeof ArticleEditPage>;

const ArticleEditPageTemplate: ComponentStory<typeof ArticleEditPage> = (
  args
) => <ArticleEditPage {...args} />;

export const Dark = ArticleEditPageTemplate.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
export const Light = ArticleEditPageTemplate.bind({});

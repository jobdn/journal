import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook";
import { Theme } from "shared/config/theme";

import { ArticleNewPage } from "./ArticleNewPage";

export default {
  title: "pages/ArticleNewPage",
  component: ArticleNewPage,
} as ComponentMeta<typeof ArticleNewPage>;

const ArticleNewPageTemplate: ComponentStory<typeof ArticleNewPage> = (
  args
) => <ArticleNewPage {...args} />;

export const Dark = ArticleNewPageTemplate.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
export const Light = ArticleNewPageTemplate.bind({});

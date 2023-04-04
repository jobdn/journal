import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook";
import { Theme } from "shared/config/theme";

import { DetailedArticlePageHeader } from "./DetailedArticlePageHeader";

export default {
  title: "pages/DetailedArticlePageHeader",
  component: DetailedArticlePageHeader,
} as ComponentMeta<typeof DetailedArticlePageHeader>;

const DetailedArticlePageHeaderTemplate: ComponentStory<
  typeof DetailedArticlePageHeader
> = (args) => <DetailedArticlePageHeader {...args} />;

export const Dark = DetailedArticlePageHeaderTemplate.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
export const Light = DetailedArticlePageHeaderTemplate.bind({});

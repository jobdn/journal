import { ComponentMeta, ComponentStory } from "@storybook/react";
import { article } from "entities/Article";

import {
  RouterDecorator,
  StoreDecorator,
  ThemeDecorator,
} from "shared/config/storybook";
import { Theme } from "shared/config/theme";

import DetailedArticle from "./DetailedArticlePage";

export default {
  title: "pages/DetailedArticle",
  component: DetailedArticle,
  decorators: [
    RouterDecorator,
    StoreDecorator({ detailedArticle: { data: article } }),
  ],
} as ComponentMeta<typeof DetailedArticle>;

const DetailedArticleTemplate: ComponentStory<typeof DetailedArticle> = (
  args
) => <DetailedArticle {...args} />;

export const Dark = DetailedArticleTemplate.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Light = DetailedArticleTemplate.bind({});

export const Error = DetailedArticleTemplate.bind({});

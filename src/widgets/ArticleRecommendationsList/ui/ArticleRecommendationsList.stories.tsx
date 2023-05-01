import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook";
import { Theme } from "shared/config/theme";

import { ArticleRecommendationsList } from "./ArticleRecommendationsList";

export default {
  title: "/ArticleRecommendationsList",
  component: ArticleRecommendationsList,
} as ComponentMeta<typeof ArticleRecommendationsList>;

const ArticleRecommendationsListTemplate: ComponentStory<
  typeof ArticleRecommendationsList
> = (args) => <ArticleRecommendationsList {...args} />;

export const Dark = ArticleRecommendationsListTemplate.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
export const Light = ArticleRecommendationsListTemplate.bind({});

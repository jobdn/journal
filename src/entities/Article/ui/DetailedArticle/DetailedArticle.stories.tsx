import { ComponentMeta, ComponentStory } from "@storybook/react";

import { DetailedArticle } from "./DetailedArticle";
import { StoreDecorator, ThemeDecorator } from "shared/config/storybook";
import { Theme } from "shared/config/theme";
import i18next from "i18next";
import { article } from "../../constants/article";

export default {
  title: "entities/DetailedArticle",
  component: DetailedArticle,
  decorators: [
    StoreDecorator({
      detailedArticle: {
        data: article,
      },
    }),
  ],
} as ComponentMeta<typeof DetailedArticle>;

const DetailedArticleTemplate: ComponentStory<typeof DetailedArticle> = (
  args
) => <DetailedArticle {...args} />;

export const Dark = DetailedArticleTemplate.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Light = DetailedArticleTemplate.bind({});

export const Error = DetailedArticleTemplate.bind({});
Error.decorators = [
  StoreDecorator({
    detailedArticle: {
      error: i18next.t("error.server_down"),
    },
  }),
];

export const Loading = DetailedArticleTemplate.bind({});
Loading.decorators = [
  StoreDecorator({
    detailedArticle: {
      isLoading: true,
    },
  }),
];

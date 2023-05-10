import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook";
import { Theme } from "shared/config/theme";

import { DetailedArticleCommentList } from "./DetailedArticleCommentList";

export default {
  title: "/DetailedArticleCommentList",
  component: DetailedArticleCommentList,
} as ComponentMeta<typeof DetailedArticleCommentList>;

const DetailedArticleCommentListTemplate: ComponentStory<
  typeof DetailedArticleCommentList
> = (args) => <DetailedArticleCommentList {...args} />;

export const Dark = DetailedArticleCommentListTemplate.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
export const Light = DetailedArticleCommentListTemplate.bind({});

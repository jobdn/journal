import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook";
import { Theme } from "shared/config/theme";

import { CommentList } from "./CommentList";

export default {
  title: "/CommentList",
  component: CommentList,
} as ComponentMeta<typeof CommentList>;

const CommentListTemplate: ComponentStory<typeof CommentList> = (args) => (
  <CommentList {...args} />
);

export const Dark = CommentListTemplate.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
export const Light = CommentListTemplate.bind({});

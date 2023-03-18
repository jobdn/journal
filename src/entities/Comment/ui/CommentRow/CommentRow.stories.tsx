import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook";
import { Theme } from "shared/config/theme";

import { CommentRow } from "./CommentRow";

export default {
  title: "/CommentRow",
  component: CommentRow,
} as ComponentMeta<typeof CommentRow>;

const CommentRowTemplate: ComponentStory<typeof CommentRow> = (args) => (
  <CommentRow {...args} />
);

export const Dark = CommentRowTemplate.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
export const Light = CommentRowTemplate.bind({});

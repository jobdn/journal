import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook";
import { Theme } from "shared/config/theme";

import { AddComment } from "./AddComment";

export default {
  title: "features/AddComment",
  component: AddComment,
} as ComponentMeta<typeof AddComment>;

const AddCommentTemplate: ComponentStory<typeof AddComment> = (args) => (
  <AddComment {...args} />
);

export const Dark = AddCommentTemplate.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Light = AddCommentTemplate.bind({});

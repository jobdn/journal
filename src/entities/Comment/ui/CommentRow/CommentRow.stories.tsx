import { ComponentMeta, ComponentStory } from "@storybook/react";

import { RouterDecorator, ThemeDecorator } from "shared/config/storybook";
import { Theme } from "shared/config/theme";

import { CommentRow } from "./CommentRow";
import userAvatar from "shared/assets/tests/image.webp";

export default {
  title: "entities/CommentRow",
  component: CommentRow,
  decorators: [RouterDecorator],
  args: {
    comment: {
      id: "1",
      articleId: "1",
      text: "cool article ",
      user: { id: "1", username: "DAn", avatar: userAvatar },
    },
  },
} as ComponentMeta<typeof CommentRow>;

const CommentRowTemplate: ComponentStory<typeof CommentRow> = (args) => (
  <CommentRow {...args} />
);

export const Dark = CommentRowTemplate.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Light = CommentRowTemplate.bind({});
export const Loading = CommentRowTemplate.bind({});

Loading.args = {
  isLoading: true,
};

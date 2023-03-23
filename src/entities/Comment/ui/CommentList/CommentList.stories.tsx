import { ComponentMeta, ComponentStory } from "@storybook/react";

import { RouterDecorator, ThemeDecorator } from "shared/config/storybook";
import { Theme } from "shared/config/theme";

import { CommentList } from "./CommentList";

import userAvatar from "shared/assets/tests/image.webp";

export default {
  title: "entities/CommentList",
  component: CommentList,
  decorators: [RouterDecorator],
  args: {
    commentList: [
      {
        id: "1",
        articleId: "1",
        text: "cool article ",
        user: { id: "1", username: "DAn", avatar: userAvatar },
      },
      {
        id: "2",
        articleId: "12",
        text: "cool article ",
        user: { id: "1", username: "DAn", avatar: userAvatar },
      },
      {
        id: "2",
        articleId: "12",
        text: "cool article ",
        user: { id: "1", username: "DAn", avatar: userAvatar },
      },
    ],
  },
} as ComponentMeta<typeof CommentList>;

const CommentListTemplate: ComponentStory<typeof CommentList> = (args) => (
  <CommentList {...args} />
);

export const Dark = CommentListTemplate.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Light = CommentListTemplate.bind({});

export const Empty = CommentListTemplate.bind({});
Empty.args = { commentList: undefined };

export const Loading = CommentListTemplate.bind({});
Loading.args = { isLoading: true };

export const Error = CommentListTemplate.bind({});
Error.args = { error: "Catastrophe" };

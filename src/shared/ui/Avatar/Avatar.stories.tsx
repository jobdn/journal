import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Avatar } from "./Avatar";

export default {
  title: "shared/Avatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const AvatarTemplate: ComponentStory<typeof Avatar> = (args) => (
  <Avatar {...args} />
);

export const Square = AvatarTemplate.bind({});
Square.args = {
  alt: "User avatar",
  size: 200,
  src: "https://images.unsplash.com/photo-1504060765228-f97d1772ff9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
};

export const Circle = AvatarTemplate.bind({});
Circle.args = {
  alt: "User avatar",
  size: 200,
  src: "https://images.unsplash.com/photo-1504060765228-f97d1772ff9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  variant: "circle",
};

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Avatar } from "./Avatar";

import ImgSrc from "../../assets/tests/image.webp";

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
  src: ImgSrc,
};

export const Circle = AvatarTemplate.bind({});
Circle.args = {
  alt: "User avatar",
  size: 200,
  src: ImgSrc,
  variant: "circle",
};

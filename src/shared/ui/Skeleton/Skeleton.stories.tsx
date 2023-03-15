import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook";
import { Theme } from "shared/config/theme";

import { Skeleton } from "./Skeleton";

export default {
  title: "shared/Skeleton",
  component: Skeleton,
} as ComponentMeta<typeof Skeleton>;

const SkeletonTemplate: ComponentStory<typeof Skeleton> = (args) => (
  <Skeleton {...args} />
);

export const Dark = SkeletonTemplate.bind({});
Dark.args = {
  height: "30px",
  width: "60%",
  borderRadius: "10px",
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

// export const Light = SkeletonTemplate.bind({});

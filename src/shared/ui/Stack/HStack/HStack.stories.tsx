import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook";
import { Theme } from "shared/config/theme";

import { HStack } from "./HStack";

export default {
  title: "shared/Stack/HStack",
  component: HStack,
} as ComponentMeta<typeof HStack>;

const HStackTemplate: ComponentStory<typeof HStack> = (args) => (
  <HStack {...args} />
);

export const CenterHStack = HStackTemplate.bind({});
CenterHStack.decorators = [ThemeDecorator(Theme.DARK)];
CenterHStack.args = {
  children: (
    <>
      <div>{"Hello"}</div>
      <div>{"Hello"}</div>
      <div>{"Hello"}</div>
      <div>{"Hello"}</div>
    </>
  ),
  justify: "center",
};

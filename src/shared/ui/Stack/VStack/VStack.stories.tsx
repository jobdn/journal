import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook";
import { Theme } from "shared/config/theme";

import { VStack } from "./VStack";

export default {
  title: "/VStack",
  component: VStack,
} as ComponentMeta<typeof VStack>;

const VStackTemplate: ComponentStory<typeof VStack> = (args) => (
  <VStack {...args} />
);

export const Dark = VStackTemplate.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
export const Light = VStackTemplate.bind({});

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook";
import { Theme } from "shared/config/theme";

import { ListBox } from "./ListBox";

export default {
  title: "shared/ListBox",
  component: ListBox,
} as ComponentMeta<typeof ListBox>;

const ListBoxTemplate: ComponentStory<typeof ListBox> = (args) => (
  <ListBox {...args} />
);

export const Dark = ListBoxTemplate.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
export const Light = ListBoxTemplate.bind({});

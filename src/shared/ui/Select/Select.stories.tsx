import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook";
import { Theme } from "shared/config/theme";

import { Select } from "./Select";

export default {
  title: "shared/Select",
  component: Select,
} as ComponentMeta<typeof Select>;

const SelectTemplate: ComponentStory<typeof Select> = (args) => (
  <Select {...args} />
);

export const Primary = SelectTemplate.bind({});
Primary.args = {
  options: [
    { value: "one", text: "one" },
    { value: "two", text: "two" },
  ],
  label: "Auto",
};

export const Dark = SelectTemplate.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
Dark.args = {
  options: [
    { value: "one", text: "one" },
    { value: "two", text: "two" },
  ],
  label: "Auto",
};

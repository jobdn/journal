import { ComponentMeta, ComponentStory } from "@storybook/react";

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
Dark.args = {
  options: [
    { value: "one", text: "one" },
    { value: "two", text: "two" },
  ],
  label: "Auto",
};

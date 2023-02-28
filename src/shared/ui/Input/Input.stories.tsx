import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CenteredDecorator } from "shared/config/storybook";

import { Input } from "./Input";

export default {
  title: "shared/Input",
  component: Input,
  decorators: [CenteredDecorator],
} as ComponentMeta<typeof Input>;

const InputTemplate: ComponentStory<typeof Input> = (args) => (
  <Input {...args} />
);

export const Usual = InputTemplate.bind({});
Usual.args = {
  placeholder: "Username: ",
  value: "Name",
  autoFocused: true,
};

export const Password = InputTemplate.bind({});
Password.args = {
  placeholder: "Password: ",
  value: "Password",
  autoFocused: true,
  type: "password",
};

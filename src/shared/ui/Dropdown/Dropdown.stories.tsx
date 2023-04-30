import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook";
import { Theme } from "shared/config/theme";

import { Dropdown } from "./Dropdown";
import { Button, ButtonVariant } from "../Button";

export default {
  title: "shared/Dropdown",
  component: Dropdown,
  args: {
    trigger: <Button variant={ButtonVariant.OUTLINED}>Dropdown button</Button>,
    options: [
      {
        content: "Log out",
        action() {
          console.log("Log out");
        },
      },
      {
        content: "Create article",
        action() {
          console.log("Create article");
        },
      },
      {
        content: "Profile",
        href: "",
      },
    ],
  },
} as ComponentMeta<typeof Dropdown>;

const DropdownTemplate: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const Dark = DropdownTemplate.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Light = DropdownTemplate.bind({});

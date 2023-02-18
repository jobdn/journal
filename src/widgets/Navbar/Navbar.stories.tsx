import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Navbar } from "./Navbar";

import { RouterDecorator } from "shared/config/storybook/decorators/RouterDecorator";
import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "shared/config/theme";

export default {
  title: "widgets/Navbar",
  component: Navbar,
  decorators: [RouterDecorator],
} as ComponentMeta<typeof Navbar>;

const NavbarTemplate: ComponentStory<typeof Navbar> = (args) => (
  <Navbar {...args} />
);

export const LightNavbar = NavbarTemplate.bind({});
export const DarkNavbar = NavbarTemplate.bind({});
DarkNavbar.decorators = [ThemeDecorator(Theme.DARK)];

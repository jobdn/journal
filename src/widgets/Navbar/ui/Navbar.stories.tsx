import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Navbar } from "./Navbar";

import { RouterDecorator } from "shared/config/storybook/decorators/RouterDecorator";
import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "shared/config/theme";
import { StoreDecorator } from "shared/config/storybook";

export default {
  title: "widgets/Navbar",
  component: Navbar,
  decorators: [RouterDecorator],
} as ComponentMeta<typeof Navbar>;

const NavbarTemplate: ComponentStory<typeof Navbar> = (args) => (
  <Navbar {...args} />
);

export const LightThemeNavbar = NavbarTemplate.bind({});
export const DarkThemeNavbar = NavbarTemplate.bind({});
DarkThemeNavbar.decorators = [ThemeDecorator(Theme.DARK)];

export const Auth = NavbarTemplate.bind({});
Auth.decorators = [StoreDecorator({ user: { userData: {} } })];
export const NoAuth = NavbarTemplate.bind({});

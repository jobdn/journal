import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Sidebar } from "./Sidebar";

import "shared/styles/index.scss";
import { StoreDecorator, ThemeDecorator } from "shared/config/storybook";
import { Theme } from "shared/config/theme";
import { RouterDecorator } from "shared/config/storybook";

export default {
  title: "widgets/Sidebar",
  component: Sidebar,
  decorators: [RouterDecorator],
} as ComponentMeta<typeof Sidebar>;

const SidebarTemplate: ComponentStory<typeof Sidebar> = (args) => (
  <Sidebar {...args} />
);

export const Dark = SidebarTemplate.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Light = SidebarTemplate.bind({});

export const Auth = SidebarTemplate.bind({});
Auth.decorators = [StoreDecorator({ user: { userData: {}, isAuth: true } })];

export const NoAuth = SidebarTemplate.bind({});

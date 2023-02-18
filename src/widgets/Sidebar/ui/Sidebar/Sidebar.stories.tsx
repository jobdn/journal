import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Sidebar } from "./Sidebar";

import "shared/styles/index.scss";
import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "shared/config/theme";

export default {
  title: "widgets/Sidebar",
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const SidebarTemplate: ComponentStory<typeof Sidebar> = (args) => (
  <Sidebar {...args} />
);

export const Dark = SidebarTemplate.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Light = SidebarTemplate.bind({});
Light.args = {};

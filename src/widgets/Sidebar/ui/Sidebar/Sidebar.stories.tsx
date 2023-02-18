import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Sidebar } from "./Sidebar";

import "shared/styles/index.scss";
import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "shared/config/theme";

export default {
  title: "widgets/Sidebar",
  component: Sidebar,
  decorators: [ThemeDecorator(Theme.DARK, false)],
} as ComponentMeta<typeof Sidebar>;

const SidebarTemplate: ComponentStory<typeof Sidebar> = (args) => (
  <Sidebar {...args} />
);

export const Dark = SidebarTemplate.bind({});

export const Light = SidebarTemplate.bind({});

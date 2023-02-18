import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook";
import { Theme } from "shared/config/theme";

import Home from "./Home";

export default {
  title: "pages/Home",
  component: Home,
} as ComponentMeta<typeof Home>;

const HomeTemplate: ComponentStory<typeof Home> = (args) => <Home {...args} />;

export const DarkHome = HomeTemplate.bind({});
DarkHome.decorators = [ThemeDecorator(Theme.DARK)];

export const LightHome = HomeTemplate.bind({});

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook";
import { Theme } from "shared/config/theme";

import About from "./About";

export default {
  title: "pages/About",
  component: About,
} as ComponentMeta<typeof About>;

const AboutTemplate: ComponentStory<typeof About> = (args) => (
  <About {...args} />
);

export const DarkAbout = AboutTemplate.bind({});
DarkAbout.decorators = [ThemeDecorator(Theme.DARK)];

export const LightAbout = AboutTemplate.bind({});

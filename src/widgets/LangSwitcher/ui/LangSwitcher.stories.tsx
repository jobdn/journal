import { ComponentMeta, ComponentStory } from "@storybook/react";

import { LangSwitcher } from "./LangSwitcher";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "shared/config/theme";

export default {
  title: "widgets/LangSwitcher",
  component: LangSwitcher,
} as ComponentMeta<typeof LangSwitcher>;

const LangSwitcherTemplate: ComponentStory<typeof LangSwitcher> = (args) => (
  <LangSwitcher {...args} />
);

export const LightThemeLangSwitcher = LangSwitcherTemplate.bind({});
export const DarkThemeLangSwitcher = LangSwitcherTemplate.bind({});
DarkThemeLangSwitcher.decorators = [ThemeDecorator(Theme.DARK)];

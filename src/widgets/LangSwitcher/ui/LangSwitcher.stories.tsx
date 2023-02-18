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

export const LightLangSwitcher = LangSwitcherTemplate.bind({});
export const DarkLangSwitcher = LangSwitcherTemplate.bind({});
DarkLangSwitcher.decorators = [ThemeDecorator(Theme.DARK)];

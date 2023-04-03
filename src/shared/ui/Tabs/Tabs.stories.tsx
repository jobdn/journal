import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook";
import { Theme } from "shared/config/theme";

import { Tabs } from "./Tabs";

export default {
  title: "shared/Tabs",
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

const TabsTemplate: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Dark = TabsTemplate.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
Dark.args = {
  tabs: [
    { content: "one", value: "one" },
    { content: "two", value: "two" },
    { content: "three", value: "three" },
  ],
  activeTab: "one",
};

export const Light = TabsTemplate.bind({});
Light.args = {
  tabs: [
    { content: "one", value: "IT" },
    { content: "two", value: "JOKE" },
    { content: "three", value: "HEALTH" },
  ],
  activeTab: "IT",
};

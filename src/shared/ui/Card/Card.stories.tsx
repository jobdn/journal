import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook";
import { Theme } from "shared/config/theme";

import { Card } from "./Card";

export default {
  title: "shared/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const CardTemplate: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Dark = CardTemplate.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
Dark.args = {
  children: "Card content",
};

export const Light = CardTemplate.bind({});
Light.args = {
  children: "Card content",
};

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { CircleLoader } from "./CircleLoader";

import { ThemeDecorator } from "../../config/storybook/decorators/ThemeDecorator";
import { Theme } from "../../config/theme";

export default {
  title: "shared/CircleLoader",
  component: CircleLoader,
} as ComponentMeta<typeof CircleLoader>;

const CircleLoaderTemplate: ComponentStory<typeof CircleLoader> = (args) => (
  <CircleLoader {...args} />
);

export const LightCircleLoader = CircleLoaderTemplate.bind({});

export const DarkCircleLoader = CircleLoaderTemplate.bind({});
DarkCircleLoader.decorators = [ThemeDecorator(Theme.DARK)];

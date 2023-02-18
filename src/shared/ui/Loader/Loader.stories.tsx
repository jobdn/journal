import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Loader } from "./Loader";

import { ThemeDecorator } from "../../config/storybook/decorators/ThemeDecorator";
import { Theme } from "../../config/theme";
import { RouterDecorator } from "../../config/storybook/decorators/RouterDecorator";

export default {
  title: "shared/Loader",
  component: Loader,
  decorators: [RouterDecorator],
  args: {
    to: "/",
  },
} as ComponentMeta<typeof Loader>;

const LoaderTemplate: ComponentStory<typeof Loader> = (args) => (
  <Loader {...args} />
);

export const LightLoader = LoaderTemplate.bind({});

export const DarkLoader = LoaderTemplate.bind({});
DarkLoader.decorators = [ThemeDecorator(Theme.DARK)];

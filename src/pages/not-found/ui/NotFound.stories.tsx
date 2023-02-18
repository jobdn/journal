import { ComponentMeta, ComponentStory } from "@storybook/react";

import { CenteredDecorator, ThemeDecorator } from "shared/config/storybook";
import { Theme } from "shared/config/theme";

import NotFound from "./NotFound";

export default {
  title: "pages/NotFound",
  component: NotFound,
} as ComponentMeta<typeof NotFound>;

const NotFoundTemplate: ComponentStory<typeof NotFound> = (args) => (
  <NotFound {...args} />
);

export const DarkNotFound = NotFoundTemplate.bind({});
DarkNotFound.decorators = [CenteredDecorator, ThemeDecorator(Theme.DARK)];

export const LightNotFound = NotFoundTemplate.bind({});
DarkNotFound.decorators = [CenteredDecorator];

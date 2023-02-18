import { ComponentMeta, ComponentStory } from "@storybook/react";

import { CenteredDecorator, ThemeDecorator } from "shared/config/storybook";
import { Theme } from "shared/config/theme";

import { PageError } from "./PageError";

export default {
  title: "widgets/PageError",
  component: PageError,
  parameters: {
    loki: {
      skip: true,
    },
  },
} as ComponentMeta<typeof PageError>;

const PageErrorTemplate: ComponentStory<typeof PageError> = (args) => (
  <PageError {...args} />
);

export const DarkPageError = PageErrorTemplate.bind({});
DarkPageError.decorators = [CenteredDecorator, ThemeDecorator(Theme.DARK)];

export const LightPageError = PageErrorTemplate.bind({});
LightPageError.decorators = [CenteredDecorator];

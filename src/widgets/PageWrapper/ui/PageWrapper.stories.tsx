import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook";
import { Theme } from "shared/config/theme";

import { PageWrapper } from "./PageWrapper";

export default {
  title: "/PageWrapper",
  component: PageWrapper,
} as ComponentMeta<typeof PageWrapper>;

const PageWrapperTemplate: ComponentStory<typeof PageWrapper> = (args) => (
  <PageWrapper {...args} />
);

export const Dark = PageWrapperTemplate.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
export const Light = PageWrapperTemplate.bind({});

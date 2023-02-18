import { ComponentMeta, ComponentStory } from "@storybook/react";

import { AppLink } from "./AppLink";
import { AppLinkProps, AppLinkThemes } from "./types";

import { RouterDecorator } from "../../config/storybook/decorators/RouterDecorator";
import { ThemeDecorator } from "../../config/storybook/decorators/ThemeDecorator";
import { Theme } from "../../config/theme";

export default {
  title: "shared/AppLink",
  component: AppLink,
  decorators: [RouterDecorator],
  args: {
    to: "/",
  },
} as ComponentMeta<typeof AppLink>;

const AppLinkTemplate: ComponentStory<typeof AppLink> = (
  args: AppLinkProps
) => <AppLink {...args} />;

export const Primary = AppLinkTemplate.bind({});
Primary.args = {
  children: "Primary",
  theme: AppLinkThemes.PRIMARY,
};

export const Secondary = AppLinkTemplate.bind({});
Secondary.args = {
  children: "Secondary",
  theme: AppLinkThemes.SECONDARY,
};

export const Outlined = AppLinkTemplate.bind({});
Outlined.args = {
  children: "Outlined",
  theme: AppLinkThemes.OUTLINED,
};

export const PrimaryDark = AppLinkTemplate.bind({});
PrimaryDark.args = {
  children: "Primary",
  theme: AppLinkThemes.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryDark = AppLinkTemplate.bind({});
SecondaryDark.args = {
  children: "Secondary",
  theme: AppLinkThemes.SECONDARY,
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlinedDark = AppLinkTemplate.bind({});
OutlinedDark.args = {
  children: "Outlined",
  theme: AppLinkThemes.OUTLINED,
};
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];

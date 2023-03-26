import { ComponentMeta, ComponentStory } from "@storybook/react";

import { AppLink } from "./AppLink";
import { AppLinkProps, AppLinkVariants } from "./types";

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
  variant: AppLinkVariants.PRIMARY,
};

export const Secondary = AppLinkTemplate.bind({});
Secondary.args = {
  children: "Secondary",
  variant: AppLinkVariants.SECONDARY,
};

export const PrimaryDark = AppLinkTemplate.bind({});
PrimaryDark.args = {
  children: "Primary",
  variant: AppLinkVariants.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryDark = AppLinkTemplate.bind({});
SecondaryDark.args = {
  children: "Secondary",
  variant: AppLinkVariants.SECONDARY,
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];

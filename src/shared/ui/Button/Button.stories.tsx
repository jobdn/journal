import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "shared/config/theme";

import { Button } from "./Button";
import { ButtonProps, ButtonVariant } from "./types";

export default {
  title: "shared/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const ButtonTemplate: ComponentStory<typeof Button> = (args: ButtonProps) => {
  const { children, ...restProps } = args;
  return <Button {...restProps}>{children}</Button>;
};

export const Clear = ButtonTemplate.bind({});
Clear.args = {
  variant: ButtonVariant.CLEAR,
  children: "BUTTON TEXT",
};

export const DarkClearInverted = ButtonTemplate.bind({});
DarkClearInverted.args = {
  variant: ButtonVariant.CLEAR_INVERTED,
  children: "BUTTON TEXT",
};

DarkClearInverted.decorators = [ThemeDecorator(Theme.DARK)];

export const ClearInverted = ButtonTemplate.bind({});
ClearInverted.args = {
  variant: ButtonVariant.CLEAR_INVERTED,
  children: "BUTTON TEXT",
};

export const Filled = ButtonTemplate.bind({});
Filled.args = {
  variant: ButtonVariant.FILLED,
  children: "FILLED BUTTON TEXT",
};

export const Outlined = ButtonTemplate.bind({});
Outlined.args = {
  variant: ButtonVariant.OUTLINED,
  children: "OUTLINED BUTTON TEXT",
};

export const ClearDark = ButtonTemplate.bind({});
ClearDark.args = {
  variant: ButtonVariant.CLEAR,
  children: "BUTTON TEXT",
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const FilledDark = ButtonTemplate.bind({});
FilledDark.args = {
  variant: ButtonVariant.FILLED,
  children: "FILLED BUTTON TEXT",
};
FilledDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlinedDark = ButtonTemplate.bind({});
OutlinedDark.args = {
  variant: ButtonVariant.OUTLINED,
  children: "OUTLINED BUTTON TEXT",
};
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];

// import { Story } from "@storybook/react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "shared/config/theme";

import { Button } from "./Button";
import { ButtonProps, ButtonThemes } from "./types";

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
  theme: ButtonThemes.CLEAR,
  children: "BUTTON TEXT",
};

export const Filled = ButtonTemplate.bind({});
Filled.args = {
  theme: ButtonThemes.FILLED,
  children: "FILLED BUTTON TEXT",
};

export const Outlined = ButtonTemplate.bind({});
Outlined.args = {
  theme: ButtonThemes.OUTLINED,
  children: "OUTLINED BUTTON TEXT",
};

export const ClearDark = ButtonTemplate.bind({});
ClearDark.args = {
  theme: ButtonThemes.CLEAR,
  children: "BUTTON TEXT",
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK, true)];

export const FilledDark = ButtonTemplate.bind({});
FilledDark.args = {
  theme: ButtonThemes.FILLED,
  children: "FILLED BUTTON TEXT",
};
FilledDark.decorators = [ThemeDecorator(Theme.DARK, true)];

export const OutlinedDark = ButtonTemplate.bind({});
OutlinedDark.args = {
  theme: ButtonThemes.OUTLINED,
  children: "OUTLINED BUTTON TEXT",
};
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK, true)];

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "shared/config/theme";

import { Text } from "./Text";
import { TextProps } from "./types";

export default {
  title: "shared/Text",
  component: Text,
} as ComponentMeta<typeof Text>;

const TextTemplate: ComponentStory<typeof Text> = (args: TextProps) => (
  <Text {...args} />
);

export const Primary = TextTemplate.bind({});
Primary.args = {
  title: "lorem",
  text: "lorem",
};

export const Error = TextTemplate.bind({});
Error.args = {
  title: "lorem",
  text: "lorem",
  variant: "error",
};

export const OnlyTitle = TextTemplate.bind({});
OnlyTitle.args = {
  title: "lorem",
};

export const OnlyText = TextTemplate.bind({});
OnlyText.args = {
  text: "lorem",
};

export const PrimaryDark = TextTemplate.bind({});
PrimaryDark.args = {
  title: "lorem",
  text: "lorem",
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ErrorDark = TextTemplate.bind({});
ErrorDark.args = {
  title: "lorem",
  text: "lorem",
  variant: "error",
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = TextTemplate.bind({});
OnlyTitleDark.args = {
  title: "lorem",
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = TextTemplate.bind({});
OnlyTextDark.args = {
  text: "lorem",
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeL = TextTemplate.bind({});
SizeL.args = {
  text: "lorem",
  title: "lorem",
  size: "l",
};

export const SizeM = TextTemplate.bind({});
SizeM.args = {
  text: "lorem",
  title: "lorem",
  size: "m",
};
export const Center = TextTemplate.bind({});
Center.args = {
  text: "lorem",
  title: "lorem",
  align: "center",
};

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook";
import { Theme } from "shared/config/theme";

import { Flex } from "./Flex";

export default {
  title: "shared/Stack/Flex",
  component: Flex,
} as ComponentMeta<typeof Flex>;

const FlexTemplate: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Row = FlexTemplate.bind({});
Row.decorators = [ThemeDecorator(Theme.DARK)];
Row.args = {
  children: (
    <>
      <div>{"Hello"}</div>
      <div>{"Hello"}</div>
      <div>{"Hello"}</div>
      <div>{"Hello"}</div>
    </>
  ),
};

export const CenterRow = FlexTemplate.bind({});
CenterRow.decorators = [ThemeDecorator(Theme.DARK)];
CenterRow.args = {
  children: (
    <>
      <div>{"Hello"}</div>
      <div>{"Hello"}</div>
      <div>{"Hello"}</div>
      <div>{"Hello"}</div>
    </>
  ),
  justify: "center",
};

export const CenterEnd = FlexTemplate.bind({});
CenterEnd.decorators = [ThemeDecorator(Theme.DARK)];
CenterEnd.args = {
  children: (
    <>
      <div>{"Hello"}</div>
      <div>{"Hello"}</div>
      <div>{"Hello"}</div>
      <div>{"Hello"}</div>
    </>
  ),
  justify: "end",
};

export const RowGap4 = FlexTemplate.bind({});
RowGap4.decorators = [ThemeDecorator(Theme.DARK)];
RowGap4.args = {
  children: (
    <>
      <div>{"Hello"}</div>
      <div>{"Hello"}</div>
      <div>{"Hello"}</div>
      <div>{"Hello"}</div>
    </>
  ),
  gap: "4",
};

export const RowGap8 = FlexTemplate.bind({});
RowGap8.decorators = [ThemeDecorator(Theme.DARK)];
RowGap8.args = {
  children: (
    <>
      <div>{"Hello"}</div>
      <div>{"Hello"}</div>
      <div>{"Hello"}</div>
      <div>{"Hello"}</div>
    </>
  ),
  gap: "8",
};

export const RowGap16 = FlexTemplate.bind({});
RowGap16.decorators = [ThemeDecorator(Theme.DARK)];
RowGap16.args = {
  children: (
    <>
      <div>{"Hello"}</div>
      <div>{"Hello"}</div>
      <div>{"Hello"}</div>
      <div>{"Hello"}</div>
    </>
  ),
  gap: "16",
};

export const Column = FlexTemplate.bind({});
Column.decorators = [ThemeDecorator(Theme.DARK)];
Column.args = {
  children: (
    <>
      <div>{"Hello"}</div>
      <div>{"Hello"}</div>
      <div>{"Hello"}</div>
      <div>{"Hello"}</div>
    </>
  ),
  direction: "column",
  align: "start",
};

export const ColumnCenter = FlexTemplate.bind({});
ColumnCenter.decorators = [ThemeDecorator(Theme.DARK)];
ColumnCenter.args = {
  children: (
    <>
      <div>{"Hello"}</div>
      <div>{"Hello"}</div>
      <div>{"Hello"}</div>
      <div>{"Hello"}</div>
    </>
  ),
  direction: "column",
  justify: "center",
};

export const ColumnEnd = FlexTemplate.bind({});
ColumnEnd.decorators = [ThemeDecorator(Theme.DARK)];
ColumnEnd.args = {
  children: (
    <>
      <div>{"Hello"}</div>
      <div>{"Hello"}</div>
      <div>{"Hello"}</div>
      <div>{"Hello"}</div>
    </>
  ),
  direction: "column",
  justify: "end",
};

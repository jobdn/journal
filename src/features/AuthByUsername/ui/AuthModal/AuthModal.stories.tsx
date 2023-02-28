import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook";
import { Theme } from "shared/config/theme";

import { AuthModal } from "./AuthModal";

export default {
  title: "features/AuthModal",
  component: AuthModal,
} as ComponentMeta<typeof AuthModal>;

const AuthModalTemplate: ComponentStory<typeof AuthModal> = (args) => (
  <AuthModal {...args} />
);

export const Light = AuthModalTemplate.bind({});
Light.args = { isOpen: true };

export const Dark = AuthModalTemplate.bind({});
Dark.args = { isOpen: true };
Dark.decorators = [ThemeDecorator(Theme.DARK)];

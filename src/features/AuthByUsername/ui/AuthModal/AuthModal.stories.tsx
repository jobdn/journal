import { ComponentMeta, ComponentStory } from "@storybook/react";
import i18n from "app/config/i18n";
import { ThemeDecorator, StoreDecorator } from "shared/config/storybook";
import { Theme } from "shared/config/theme";

import { AuthModal } from "./AuthModal";

export default {
  title: "features/AuthModal",
  component: AuthModal,
  args: { isOpen: true },
} as ComponentMeta<typeof AuthModal>;

const AuthModalTemplate: ComponentStory<typeof AuthModal> = (args) => (
  <AuthModal {...args} />
);

export const Light = AuthModalTemplate.bind({});
Light.decorators = [
  StoreDecorator({ auth: { password: "Danila", username: "Danila" } }),
];

export const Dark = AuthModalTemplate.bind({});
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({ auth: { password: "Danila", username: "Danila" } }),
];

export const WithInvalidPasswordOrLoginError = AuthModalTemplate.bind({});
WithInvalidPasswordOrLoginError.decorators = [
  StoreDecorator({
    auth: {
      password: "Danila",
      username: "Danila",
      error: i18n.t(""),
    },
  }),
];

export const WithServerError = AuthModalTemplate.bind({});
WithServerError.decorators = [
  StoreDecorator({
    auth: {
      password: "Danila",
      username: "Danila",
      error: i18n.t("server_down"),
    },
  }),
];

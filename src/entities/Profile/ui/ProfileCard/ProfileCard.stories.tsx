import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { ThemeDecorator } from "shared/config/storybook";
import { Theme } from "shared/config/theme";

import { ProfileCard } from "./ProfileCard";

import ImgSrc from "shared/assets/tests/image.webp";
import i18next from "i18next";

export default {
  title: "entities/ProfileCard",
  component: ProfileCard,
} as ComponentMeta<typeof ProfileCard>;

const ProfileCardTemplate: ComponentStory<typeof ProfileCard> = (args) => (
  <ProfileCard {...args} />
);

const data = {
  id: "1",
  age: 21,
  city: "Moscow",
  country: Country.Russia,
  currency: Currency.RUB,
  name: "Dan",
  lastname: "Pisarev",
  avatar: ImgSrc,
  username: "Admin",
};

export const Light = ProfileCardTemplate.bind({});
Light.args = {
  data,
};

export const Dark = ProfileCardTemplate.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
Dark.args = {
  data,
};

export const Error = ProfileCardTemplate.bind({});
Error.args = {
  error: i18next.t("error.server_down"),
};

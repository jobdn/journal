import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";

import { StoreDecorator, ThemeDecorator } from "shared/config/storybook";
import { Theme } from "shared/config/theme";

import ProfilePage from "./ProfilePage";
import ImgSrc from "shared/assets/tests/image.webp";
import i18next from "i18next";

export default {
  title: "pages/ProfilePage",
  component: ProfilePage,
  decorators: [
    StoreDecorator({
      profile: {
        form: {
          age: 21,
          city: "Moscow",
          country: Country.Russia,
          currency: Currency.RUB,
          name: "Dan",
          lastname: "Pisarev",
          avatar: ImgSrc,
          username: "Admin",
        },
        profileData: {
          age: 21,
          city: "Moscow",
          country: Country.Russia,
          currency: Currency.RUB,
          name: "Dan",
          lastname: "Pisarev",
          avatar: ImgSrc,
          username: "Admin",
        },
      },
    }),
  ],
} as ComponentMeta<typeof ProfilePage>;

const ProfilePageTemplate: ComponentStory<typeof ProfilePage> = () => (
  <ProfilePage />
);

export const Dark = ProfilePageTemplate.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Light = ProfilePageTemplate.bind({});
export const Error = ProfilePageTemplate.bind({});
Error.decorators = [
  StoreDecorator({
    profile: {
      error: i18next.t("error.server_down"),
    },
  }),
];

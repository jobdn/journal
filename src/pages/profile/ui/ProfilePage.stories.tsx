import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook";
import { Theme } from "shared/config/theme";

import ProfilePage from "./ProfilePage";

export default {
  title: "pages/ProfilePage",
  component: ProfilePage,
} as ComponentMeta<typeof ProfilePage>;

const ProfilePageTemplate: ComponentStory<typeof ProfilePage> = () => (
  <ProfilePage />
);

export const DarkProfilePage = ProfilePageTemplate.bind({});
DarkProfilePage.decorators = [ThemeDecorator(Theme.DARK)];

export const LightProfilePage = ProfilePageTemplate.bind({});

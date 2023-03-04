import {
  ThemeDecorator,
  I18nDecorator,
  StoreDecorator,
} from "shared/config/storybook";

export { globalTypes } from "./globalTypes";
import i18n from "shared/config/i18n/i18nForStorybook";
import { Theme } from "shared/config/theme";

export const decorators = [
  ThemeDecorator(Theme.LIGHT),
  I18nDecorator(i18n),
  StoreDecorator(),
];

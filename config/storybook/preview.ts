import { ThemeDecorator, I18nDecorator } from "shared/config/storybook";
import { Theme } from "shared/config/theme";

export { globalTypes } from "./globalTypes";
import i18n from "shared/config/i18n/i18nForStorybook";

export const decorators = [ThemeDecorator(Theme.LIGHT), I18nDecorator(i18n)];

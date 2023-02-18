import { Suspense, useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import { Story, StoryContext } from "@storybook/react";
import { i18n } from "i18next";

export const I18nDecorator =
  // eslint-disable-next-line react/display-name
  (i18n: i18n) => (Story: Story, context: StoryContext) => {
    const { locale } = context.globals;

    // When the locale global changes
    // Set the new locale in i18n
    useEffect(() => {
      i18n.changeLanguage(locale);
    }, [locale]);

    return (
      <Suspense fallback={<div>loading translations...</div>}>
        <I18nextProvider i18n={i18n}>
          <Story />
        </I18nextProvider>
      </Suspense>
    );
  };

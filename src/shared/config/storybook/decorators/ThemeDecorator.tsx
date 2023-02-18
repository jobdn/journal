import "../../../styles/index.scss";

import { Story } from "@storybook/react";
import { Theme, useTheme } from "shared/config/theme";

export const ThemeDecorator =
  (defaultTheme: Theme, useDefaultTheme?: boolean) =>
  // eslint-disable-next-line react/display-name
  (StoryComponent: Story) => {
    const { theme: themeFromContext } = useTheme();

    return (
      <div
        className={`app ${useDefaultTheme ? defaultTheme : themeFromContext}`}
      >
        <StoryComponent />
      </div>
    );
  };

// <Context></Context>

// <div className={`app ${useDefaultTheme(true) ? defaultTheme : themeFromContext}`}> - которым нужна только светлая тема

// <div className={`app ${useDefaultTheme(false) ? defaultTheme : themeFromContext}`}> - которым нужно переключение темы

// <div className={`app dark`}> - кому нужна только темная тема

import "../../../styles/index.scss";

import { Story } from "@storybook/react";
import { Theme } from "shared/config/theme";

export const ThemeDecorator =
  (defaultTheme: Theme) =>
  // eslint-disable-next-line react/display-name
  (StoryComponent: Story) => {
    return (
      <div className={`app ${defaultTheme}`}>
        <StoryComponent />
      </div>
    );
  };

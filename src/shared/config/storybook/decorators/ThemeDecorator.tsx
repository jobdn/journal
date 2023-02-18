import "../../../styles/index.scss";

import { Story } from "@storybook/react";
import { Theme } from "shared/config/theme";

export const ThemeDecorator =
  (defaultTheme: Theme) => (StoryComponent: Story) => {
    return (
      <div className={`app ${defaultTheme}`}>
        <StoryComponent />
      </div>
    );
  };

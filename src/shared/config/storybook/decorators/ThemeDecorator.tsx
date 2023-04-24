import "../../../styles/index.scss";

import { Story } from "@storybook/react";
import { Theme, ThemeProvider } from "../../theme";

export const ThemeDecorator =
  (initialTheme: Theme) => (StoryComponent: Story) => {
    return (
      <ThemeProvider initialTheme={initialTheme}>
        <StoryComponent />
      </ThemeProvider>
    );
  };

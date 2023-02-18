import { Story } from "@storybook/react";
import { ThemeProvider } from "shared/config/theme";

export const ThemeProviderDecorator = (StoryComponent: Story) => {
  return (
    <ThemeProvider>
      <StoryComponent />
    </ThemeProvider>
  );
};

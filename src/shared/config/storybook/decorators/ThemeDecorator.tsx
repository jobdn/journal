import "../../../styles/index.scss";

import { Story } from "@storybook/react";
import { Theme } from "shared/config/theme";

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (Story: Story) =>
  (
    <div className={`app ${theme}`}>
      <Story />
    </div>
  );

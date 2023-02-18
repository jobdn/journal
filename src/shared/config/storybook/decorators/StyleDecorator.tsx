import "../../../styles/index.scss";

import { Story } from "@storybook/react";

export const StyleDecorator = (Story: Story) => (
  <div className="app">
    <Story />
  </div>
);

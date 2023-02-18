import { Story } from "@storybook/react";

export const CenteredDecorator = (Story: Story) => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Story />
    </div>
  );
};

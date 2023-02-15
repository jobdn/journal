import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { renderWithI18n } from "shared/lib/tests/renderWithI18n";
import { Sidebar } from "./Sidebar";

describe("Sidebar", () => {
  it("should render sidebar", () => {
    renderWithI18n(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  it("should collapse and expand sidebar", async () => {
    renderWithI18n(<Sidebar />);
    const toggleButton = screen.getByText(/toggle/i);
    await userEvent.click(toggleButton);

    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");

    await userEvent.click(toggleButton);
    expect(screen.getByTestId("sidebar")).not.toHaveClass("collapsed");
  });
});

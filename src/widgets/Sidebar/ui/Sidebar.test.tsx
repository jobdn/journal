import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { renderWithProviders } from "shared/config/tests";
import { Sidebar } from "./Sidebar";

describe("Sidebar", () => {
  it("should render sidebar", () => {
    renderWithProviders(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  it("should collapse and expand sidebar", async () => {
    renderWithProviders(<Sidebar />);
    const toggleButton = screen.getByRole("button", { name: /collapse/i });
    await userEvent.click(toggleButton);

    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");

    await userEvent.click(toggleButton);
    expect(screen.getByTestId("sidebar")).not.toHaveClass("collapsed");
  });
});

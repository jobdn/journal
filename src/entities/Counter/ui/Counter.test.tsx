import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "shared/config/tests";

import { Counter } from "./Counter";

describe("Counter.test", () => {
  test("should render component with initial state", () => {
    renderWithProviders(<Counter />, {
      initialStore: { counter: { value: 10 } },
    });

    expect(screen.getByTestId("counter-value")).toHaveTextContent("10");
  });

  test("should decrement counter value", async () => {
    renderWithProviders(<Counter />, {
      initialStore: { counter: { value: 10 } },
    });
    await userEvent.click(screen.getByRole("button", { name: /Decrement/i }));
    expect(screen.getByTestId("counter-value")).toHaveTextContent("9");
  });

  test("should increment counter value", async () => {
    renderWithProviders(<Counter />, {
      initialStore: { counter: { value: 10 } },
    });
    await userEvent.click(screen.getByRole("button", { name: /Increment/i }));
    expect(screen.getByTestId("counter-value")).toHaveTextContent("11");
  });
});

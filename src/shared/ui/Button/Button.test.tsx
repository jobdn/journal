import { render, screen } from "@testing-library/react";
import { Button } from "shared/ui/Button";
import { ButtonVariant } from "./types";

describe("Button", () => {
  it("should render the button", () => {
    render(<Button>CLICK ME</Button>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should render the outlined button", () => {
    render(<Button variant={ButtonVariant.CLEAR}>I{"'"}m clear button</Button>);
    expect(screen.getByRole("button")).toHaveClass(ButtonVariant.CLEAR);
  });
});

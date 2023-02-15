import { render, screen } from "@testing-library/react";
import { Button } from "shared/ui/Button";
import { ButtonThemes } from "./types";

describe("Button", () => {
  it("should render the button", () => {
    render(<Button>CLICK ME</Button>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should render the outlined button", () => {
    render(<Button theme={ButtonThemes.CLEAR}>I{"'"}m clear button</Button>);
    expect(screen.getByRole("button")).toHaveClass(ButtonThemes.CLEAR);
  });
});

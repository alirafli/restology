import { render, screen } from "@testing-library/react";
import { Button } from "./";
import "@testing-library/jest-dom";

describe("Button component unit test", () => {
  it("should render the content base on children", () => {
    render(<Button>text button</Button>);
    const buttonElement = screen.getByRole("button", {
      name: /text button/i,
    });
    expect(buttonElement.textContent).toEqual("text button");
  });

  it("should have fullWidth class when giving fullWidth props", () => {
    render(<Button fullWidth>text button</Button>);
    const buttonElement = screen.getByRole("button", {
      name: /text button/i,
    });
    expect(buttonElement).toHaveClass("w-full");
  });
});

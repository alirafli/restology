import { render, screen } from "@testing-library/react";
import { Button } from "./";
import "@testing-library/jest-dom";

describe("Button component unit test", () => {
  it("should render the content base on children", () => {
    render(<Button>click me</Button>);
    const buttonElement = screen.getByTestId("button");
    expect(buttonElement.textContent).toEqual("click me");
  });

  it("should have fullWidth class when giving fullWidth props", () => {
    render(<Button fullWidth>click me</Button>);
    const buttonElement = screen.getByTestId("button");
    expect(buttonElement).toHaveClass("w-full");
  });
});

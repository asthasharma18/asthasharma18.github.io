import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { expect } from "vitest";
import { kebabCaseToTitleCase } from './helpers.functions';
test("button click flow", () => {
  //render component
  render(<App />);

  //check initial state of button
  const button = screen.getByRole("button", {name: /blue/i});
  expect(button).toHaveClass("medium-violet-red");


//ifire event
fireEvent.click(button);

// check for changed state
expect(button).toHaveClass("midnight-blue");
expect(button).toHaveTextContent(/red/i)

});

test('checkbox flow', () => {
   
  render(<App />);

  // find elements
  const button = screen.getByRole("button", {name: /blue/i});
  const checkbox = screen.getByRole("checkbox", { name: /disable button/i });

  //initial conditions
  expect(button).toBeEnabled();
  expect(checkbox).not.toBeChecked();

  fireEvent.click(checkbox);

  //check final conditions
  expect(checkbox).toBeChecked();
  expect(button).toBeDisabled();


});
describe("kebabCaseToTitleCase", () => {
  test("Works for no hypens", () => {
    expect(kebabCaseToTitleCase("red")).toBe("Red");
  });
  test("Works for one hyphen", () => {
    expect(kebabCaseToTitleCase("midnight-blue")).toBe("Midnight Blue");
  });
  test("Works for multiple inner hyphens", () => {
    expect(kebabCaseToTitleCase("medium-violet-red")).toBe("Medium Violet Red");
  });
});
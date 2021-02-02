import React from "react";
import { render } from "@testing-library/react";
import Tab from "./Tab";
const mockOnClick = jest.fn();
describe("The Tab Component", () => {
  it("renders without crashing", () => {
    render(
      <Tab onClick={mockOnClick} id="id" selected={true} ariaControls="test-id">
        Title
      </Tab>,
    );
  });
});

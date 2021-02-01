import React from "react";
import { render } from "@testing-library/react";
import Tab from "./Tab";
describe("The Tab Component", () => {
  it("renders without crashing", () => {
    render(<Tab />);
  });
});

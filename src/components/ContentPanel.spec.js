import React from "react";
import { render } from "@testing-library/react";
import ContentPanel from "./ContentPanel";
describe("The ContentPanel Component", () => {
  it("renders without crashing", () => {
    render(<ContentPanel />);
  });
});

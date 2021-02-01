import React from "react";
import { shallow } from "enzyme";
import ContentPanel from "./ContentPanel";
describe("The ContentPanel Component", () => {
  it("renders without crashing", () => {
    shallow(<ContentPanel />);
  });
});

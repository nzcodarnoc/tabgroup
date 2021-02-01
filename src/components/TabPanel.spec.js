import React from "react";
import { shallow } from "enzyme";
import Router from 'next/router'
import TabPanel from "./TabPanel";

const mockPush = jest.fn();

jest.mock("next/router", () => ({
  useRouter: jest.fn().mockImplementation(() => ({
    push: mockPush,
  })),
}));

describe("The TabPanel Component", () => {
  it("renders without crashing", () => {
    shallow(
      <TabPanel
        id="testing"
        label="testing"
        tabs={[{ id: "test", title: "test", content: <div>test</div> }]}
      />
    );
  });
  it("renders sets a default tab correctly", () => {
    shallow(
      <TabPanel
        id="testing-id"
        label="testing"
        tabs={[{ id: "test-tab-id", title: "test", content: <div>test</div> }]}
      />
    );
    expect(mockPush).toHaveBeenCalledWith({"query": {"testing-id-selected": "test-tab-id"}});
  });
});

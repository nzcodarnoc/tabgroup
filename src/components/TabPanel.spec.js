import React from "react";
import TabPanel from "./TabPanel";
import {render, screen} from '@testing-library/react'

const mockPush = jest.fn();

jest.mock("next/router", () => ({
  useRouter: jest.fn().mockImplementation(() => ({
    push: mockPush,
  })),
}));

describe("The TabPanel Component", () => {
  it("renders without crashing", () => {
    render(
      <TabPanel
        id="testing"
        label="testing"
        tabs={[{ id: "test", title: "test", content: <div>test</div> }]}
      />
    );
  });
  it("renders sets a default tab correctly", () => {
    render(
      <TabPanel
        id="testing-id"
        label="testing"
        tabs={[
          { id: "test-tab-1-id", title: "test title 1", content: <div>test content 1</div> },
          { id: "test-tab-2-id", title: "test title 2", content: <div>test content 2</div> },
        ]}
      />
    );
    expect(screen.getByText('test title 1')).toBeVisible()
    expect(screen.getByText('test content 1')).toBeVisible()
    expect(screen.getByText('test title 2')).toBeVisible()
    expect(screen.getByText('test content 2')).not.toBeVisible()
  });
});

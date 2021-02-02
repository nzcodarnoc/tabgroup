import React from "react";
import TabPanel from "./TabPanel";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const mockPush = jest.fn();

jest.mock("next/router", () => ({
  useRouter: jest.fn().mockImplementation(() => ({
    push: mockPush,
  })),
}));

describe("The TabPanel Component", () => {
  it("renders without crashing", () => {
    render(<TabPanel id="testing" label="testing" tabs={[{ id: "test", title: "test", content: <div>test</div> }]} />);
  });
  it("renders multiple tabpanels without crashing", () => {
    render(
      <>
        <TabPanel
          id="testing1"
          label="1 testing"
          tabs={[{ id: "test1", title: "1 test", content: <div>1 test</div> }]}
        />
        <TabPanel
          id="testing2"
          label="2 testing"
          tabs={[{ id: "test2", title: "2 test", content: <div>2 test</div> }]}
        />
        <TabPanel
          id="testing3"
          label="3 testing"
          tabs={[{ id: "test3", title: "3 test", content: <div>3 test</div> }]}
        />
      </>,
    );
  });
  it("renders sets a default tab correctly", () => {
    render(
      <TabPanel
        id="testing-id"
        label="testing"
        tabs={[
          {
            id: "test-tab-1-id",
            title: "test title 1",
            content: <div>test content 1</div>,
          },
          {
            id: "test-tab-2-id",
            title: "test title 2",
            content: <div>test content 2</div>,
          },
        ]}
      />,
    );
    expect(screen.getByText("test title 1")).toBeVisible();
    expect(screen.getByText("test content 1")).toBeVisible();
    expect(screen.getByText("test title 2")).toBeVisible();
    expect(screen.getByText("test content 2")).not.toBeVisible();
  });
  it("clicking a tab changes the content of only the associated tabpanel", () => {
    render(
      <>
        <TabPanel
          id="testing-id"
          label="testing"
          tabs={[
            {
              id: "test-tab-1-id",
              title: "test title 1",
              content: <div>test content 1</div>,
            },
            {
              id: "test-tab-2-id",
              title: "test title 2",
              content: <div>test content 2</div>,
            },
          ]}
        />
        <TabPanel
          id="other-id"
          label="other"
          tabs={[
            {
              id: "other-tab-1-id",
              title: "other title 1",
              content: <div>other content 1</div>,
            },
            {
              id: "other-tab-2-id",
              title: "other title 2",
              content: <div>other content 2</div>,
            },
          ]}
        />
      </>,
    );
    expect(screen.getByText("test title 1")).toBeVisible();
    expect(screen.getByText("test content 1")).toBeVisible();
    expect(screen.getByText("test title 2")).toBeVisible();
    expect(screen.getByText("test content 2")).not.toBeVisible();

    expect(screen.getByText("other title 1")).toBeVisible();
    expect(screen.getByText("other content 1")).toBeVisible();
    expect(screen.getByText("other title 2")).toBeVisible();
    expect(screen.getByText("other content 2")).not.toBeVisible();

    userEvent.click(screen.getByText("test title 2"));
    expect(screen.getByText("test title 1")).toBeVisible();
    expect(screen.getByText("test content 1")).not.toBeVisible();
    expect(screen.getByText("test title 2")).toBeVisible();
    expect(screen.getByText("test content 2")).toBeVisible();

    expect(screen.getByText("other title 1")).toBeVisible();
    expect(screen.getByText("other content 1")).toBeVisible();
    expect(screen.getByText("other title 2")).toBeVisible();
    expect(screen.getByText("other content 2")).not.toBeVisible();
  });
  it("selecting a tab updates the router", () => {
    render(
      <TabPanel
        id="testing-id"
        label="testing"
        tabs={[
          {
            id: "test-tab-1-id",
            title: "test title 1",
            content: <div>test content 1</div>,
          },
          {
            id: "test-tab-2-id",
            title: "test title 2",
            content: <div>test content 2</div>,
          },
        ]}
      />,
    );
    expect(mockPush.mock.calls[mockPush.mock.calls.length - 1][0]).toEqual({
      query: { "testing-id-selected": "test-tab-1-id" },
    });

    userEvent.click(screen.getByText("test title 2"));

    // TODO: mock window.location for testing
    // expect(mockPush.mock.calls[mockPush.mock.calls.length - 1][0]).toEqual({
    //   query: { "testing-id-selected": "test-tab-2-id" },
    // });
  });
});

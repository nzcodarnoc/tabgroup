import { ReactChild } from "react";

export interface TabInterface {
  id: string;
  title: string;
  content: ReactChild;
}

export interface TabButtonInterface {
  id: string;
  selected: bool;
  ariaControls: string;
  onClick: function;
  children: ReactChild;
}

export interface TabPanelInterface {
  id: string;
  label: string;
  tabs: Array<TabInstance>;
}

export interface ContentPanelInterface {
  id: string;
  selected: bool;
  children: ReactChild;
}

import { NextRouter, useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { ButtonGroup, Paper } from "@material-ui/core";
import queryString from "query-string";
import Tab from "./Tab";
import ContentPanel from "./ContentPanel";
import PropTypes from "prop-types";
import { TabPanelInterface, TabInterface } from "../types";

/*  Create the local state that keeps track of which tab is selected,
    do this by transforming the TabInterface Array
    {
      tabId1: true,
      tabId2: false,
      tabId3: false
    }
*/
function generateState(tabs: Array<TabInterface>, selectedId: string) {
  const generatedState = {};
  for (const tab of tabs) {
    generatedState[tab.id] = {
      selected: tab.id === selectedId,
    };
  }
  return generatedState;
}

/*  This function create unique(ish) query params to allow multiple instance on a page
    http://localhost:3000/?<queryKey>-selected=<tabId>
*/
function queryKey(id: string) {
  return id + "-selected";
}

/*  This function generates the ID of the content div that a tab button controls */
function contentId(id: string) {
  return id + "-content";
}

function pushHistory(tabId: string, id: string, router: NextRouter) {
  const query = queryString.parse(location.search);
  query[queryKey(id)] = tabId;
  if (getQuery(id) != tabId) router.push({ query });
}

function getQuery(id: string) {
  const queryParams = queryString.parse(location.search);
  return queryParams[queryKey(id)];
}

const TabPanel = (props: TabPanelInterface) => {
  const router = useRouter();

  const [state, setState] = useState(generateState(props.tabs, props.tabs[0].id));

  /*  do this check before useEffect to avoid a "flash" of tab switching at render time
      also, if tabs are not specified then it forces it to default to the first in the list 
  */
  const activeTab = String(getQuery(props.id));
  if (!activeTab || !state[activeTab]) {
    pushHistory(props.tabs[0].id, props.id, router);
  }

  useEffect(() => {
    const activeTab = String(getQuery(props.id));
    if (activeTab && state[activeTab] && !state[activeTab].selected) {
      didSelectTab(activeTab);
    }
  }, [router.query]);

  const didSelectTab = (tabId: string) => {
    if (state[tabId].selected) return;
    pushHistory(tabId, props.id, router);
    setState(generateState(props.tabs, tabId));
  };

  return (
    <div className="tabs">
      <div role="tablist" aria-label={props.label} className="tab-list">
        <ButtonGroup variant="text" disableElevation aria-label="outlined primary button group">
          {props.tabs.map((tab: TabInterface, index: number) => (
            <Tab
              key={index}
              id={tab.id}
              selected={state[tab.id].selected}
              ariaControls={contentId(tab.id)}
              onClick={() => didSelectTab(tab.id)}
            >
              {tab.title}
            </Tab>
          ))}
        </ButtonGroup>
      </div>
      <Paper>
        {props.tabs.map((tab: TabInterface, index: string | number) => (
          <ContentPanel key={index} id={contentId(tab.id)} selected={state[tab.id].selected}>
            {tab.content}
          </ContentPanel>
        ))}
      </Paper>
    </div>
  );
};

TabPanel.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    }),
  ).isRequired,
};

export default TabPanel;

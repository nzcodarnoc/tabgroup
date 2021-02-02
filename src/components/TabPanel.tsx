import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { ButtonGroup, Paper } from "@material-ui/core";
import queryString from "query-string";
import Tab from "./Tab";
import ContentPanel from "./ContentPanel";
import PropTypes from "prop-types";

function generateState(tabs, selectedId) {
  const generatedState = {};
  for (const tab of tabs) {
    generatedState[tab.id] = {
      selected: tab.id === selectedId,
    };
  }
  return generatedState;
}

function contentId(id) {
  return id + "-content";
}

function queryKey(id) {
  return id + "-selected";
}

function pushHistory(tabId, id, router) {
  const query = queryString.parse(location.search);
  query[queryKey(id)] = tabId;
  if (getQuery(id) != tabId) router.push({ query });
}

function getQuery(id) {
  const queryParams = queryString.parse(location.search);
  return queryParams[queryKey(id)];
}

const TabPanel = (props) => {
  const router = useRouter();

  const [state, setState] = useState(generateState(props.tabs, props.tabs[0].id));

  const activeTab = getQuery(props.id);
  if (!activeTab || !state[activeTab[0]]) {
    pushHistory(props.tabs[0].id, props.id, router);
  }

  useEffect(() => {
    const activeTab = getQuery(props.id);
    if (activeTab && state[activeTab[0]] && !state[activeTab[0]].selected) {
      didSelectTab(activeTab);
    }
  }, [router.query]);

  const didSelectTab = (tabId) => {
    if (state[tabId].selected) return;
    pushHistory(tabId, props.id, router);
    setState(generateState(props.tabs, tabId));
  };

  return (
    <div className="tabs">
      <div role="tablist" aria-label={props.label} className="tab-list">
        <ButtonGroup variant="text" disableElevation aria-label="outlined primary button group">
          {props.tabs.map((tab, index) => (
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
        {props.tabs.map((tab, index) => (
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

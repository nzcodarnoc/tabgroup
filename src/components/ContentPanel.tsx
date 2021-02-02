import PropTypes from "prop-types";
import { ContentPanelInterface } from "../types";

const ContentPanel = ({ selected, id, children }: ContentPanelInterface) => (
  <div
    role="tabpanel"
    id={id}
    className={selected ? "content-panel" : "tab-hidden"}
    aria-hidden={!selected}
    hidden={!selected}
  >
    {children}
  </div>
);

ContentPanel.propTypes = {
  id: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default ContentPanel;

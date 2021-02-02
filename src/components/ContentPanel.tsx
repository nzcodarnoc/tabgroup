import PropTypes from "prop-types";

const ContentPanel = ({ selected, id, children }) => (
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

import { Button } from "@material-ui/core";
import PropTypes from "prop-types";

const Tab = ({ selected, ariaControls, id, onClick, children }) => (
  <Button
    role="tab"
    aria-selected={selected}
    color={selected ? "primary" : "default"}
    variant={selected ? "contained" : "outlined"}
    aria-controls={ariaControls}
    id={id}
    onClick={onClick}
    aria-labelledby={id}
    disableElevation
  >
    {children}
  </Button>
);

Tab.propTypes = {
  id: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  ariaControls: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Tab;

import { Button } from "@material-ui/core";

const Tab = ({selected, ariaControls, id, onClick, children}) => <Button
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
</Button>;

export default Tab;

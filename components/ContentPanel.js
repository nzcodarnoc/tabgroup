const ContentPanel = ({ selected, id, children }) => <div
  role="tabpanel"
  id={id}
  className={selected ? "content-panel" : "tab-hidden"}
  aria-hidden={selected}
>
  {children}
</div>;

export default ContentPanel;

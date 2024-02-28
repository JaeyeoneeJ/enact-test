import { Header } from "@enact/sandstone/Panels";
import { TButton, TPanel } from "../components";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { addPanels } from "../features/panels/panelsSlice";
import { panel_names } from "../utils/Config";

const MainPanel = () => {
  const dispatch = useDispatch();

  const onClickHandler = useCallback(() => {
    dispatch(addPanels({ name: panel_names.TEST, panelInfo: {} }));
  }, []);

  return (
    <TPanel>
      <Header title="Hello world!" />
      <TButton onClick={onClickHandler}>Click me</TButton>
    </TPanel>
  );
};

export default MainPanel;

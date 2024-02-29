import { Header } from "@enact/sandstone/Panels";
import { TButton, TPanel } from "../components";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { addPanels } from "../features/panels/panelsSlice";
import { panel_names } from "../utils/Config";

const Test4Panel = () => {
  const dispatch = useDispatch();

  const onClickHandler = useCallback(() => {
    dispatch(addPanels({ name: panel_names.TEST5, panelInfo: {} }));
  }, []);

  return (
    <TPanel>
      <Header title="Test 4!" />
      <TButton onClick={onClickHandler}>Test Button</TButton>
    </TPanel>
  );
};

export default Test4Panel;

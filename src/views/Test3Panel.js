import { Header } from "@enact/sandstone/Panels";
import { TButton, TPanel } from "../components";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { addPanels } from "../features/panels/panelsSlice";
import { panel_names } from "../utils/Config";

const Test3Panel = () => {
  const dispatch = useDispatch();

  const onClickHandler = useCallback(() => {
    dispatch(addPanels({ name: panel_names.TEST4, panelInfo: {} }));
  }, []);

  return (
    <TPanel>
      <Header title="Test 3!" />
      <TButton onClick={onClickHandler}>Test Button</TButton>
    </TPanel>
  );
};

export default Test3Panel;

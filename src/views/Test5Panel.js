import { Header } from "@enact/sandstone/Panels";
import { TButton, TPanel } from "../components";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { resetPanels } from "../features/panels/panelsSlice";
import { panel_names } from "../utils/Config";

const Test5Panel = () => {
  const dispatch = useDispatch();

  const onClickHandler = useCallback(() => {
    dispatch(resetPanels());
  }, []);

  return (
    <TPanel>
      <Header title="Test 5!" />
      <TButton onClick={onClickHandler}>reset Button</TButton>
    </TPanel>
  );
};

export default Test5Panel;

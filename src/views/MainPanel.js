import { Header } from "@enact/sandstone/Panels";
import { TButton, TPanel } from "../components";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { addPanels } from "../features/panels/panelsSlice";
import { panel_names } from "../utils/Config";
import css from "./MainPanel.module.less";

const MainPanel = ({ isOnTop }) => {
  const dispatch = useDispatch();

  const onClickHandler = useCallback(() => {
    dispatch(addPanels({ name: panel_names.TEST1, panelInfo: {} }));
  }, []);

  return (
    <TPanel style={!isOnTop ? { visibility: "hidden" } : {}}>
      <Header title="Hello world!" disabled={!isOnTop} />
      <TButton onClick={onClickHandler} disabled={!isOnTop}>
        Click me
      </TButton>
      <div className={css.box} disabled={!isOnTop}>
        hello
      </div>
    </TPanel>
  );
};

export default MainPanel;

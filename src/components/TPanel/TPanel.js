import classNames from "classnames";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Panel } from "@enact/sandstone/Panels";
import { Cancelable } from "@enact/ui/Cancelable";
import { popPanel } from "../../features/panels/panelsSlice";
import css from "./TPanel.module.less";

const CancelablePanel = Cancelable(
  { modal: true, onCancel: "handleCancel" },
  Panel
);

const TPanel = ({
  className,
  children,
  handleCancel,
  isTabActivated,
  ...rest
}) => {
  const dispatch = useDispatch();
  delete rest.panelInfo;
  const onCancel = useCallback(
    (ev) => {
      if (isTabActivated) {
        return;
      }
      if (handleCancel) {
        handleCancel(ev);
      } else {
        dispatch(popPanel());
        ev.stopPropagation();
      }
    },
    [dispatch, handleCancel, isTabActivated]
  );

  return (
    <CancelablePanel
      {...rest}
      handleCancel={onCancel}
      className={classNames(css.tpanelmain, className)}
    >
      {children}
    </CancelablePanel>
  );
};

export default TPanel;

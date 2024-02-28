import React, { Suspense, lazy, useCallback, useState } from "react";
import * as Config from "../../utils/Config";
import MainPanel from "../MainPanel";
import { useSelector } from "react-redux";

const MainView = () => {
  const TestPanel = lazy(() =>
    /* webpackChunkName: "TestPanel" */ import("../TestPanel")
  );
  const panelMap = {
    [Config.panel_names.TEST]: TestPanel,
  };

  const panels = useSelector((state) => state.panels.panels);
  console.log("jjy panels", panels);

  const renderTopPanel = useCallback(() => {
    if (panels && panels.length > 0) {
      const panel = panels[panels.length - 1];
      const Component = panelMap[panel.name];
      return <Component panelInfo={panel.panelInfo} spotlightId={panel.name} />;
    } else {
      return null;
    }
  }, [panels]);

  return (
    <>
      <MainPanel />
      <Suspense fallback={<div>...loading</div>}>{renderTopPanel()}</Suspense>
    </>
  );
};

export default MainView;

import React, { Suspense, lazy, useCallback, useState } from "react";
import * as Config from "../../utils/Config";
import MainPanel from "../MainPanel";
import { useSelector } from "react-redux";

const MainView = () => {
  const Test1Panel = lazy(() =>
    import(/* webpackChunkName: "Test1Panel" */ "../Test1Panel")
  );
  const Test2Panel = lazy(() =>
    import(/* webpackChunkName: "Test2Panel" */ "../Test2Panel")
  );
  const Test3Panel = lazy(() =>
    import(/* webpackChunkName: "Test3Panel" */ "../Test3Panel")
  );
  const Test4Panel = lazy(() =>
    import(/* webpackChunkName: "Test4Panel" */ "../Test4Panel")
  );
  const Test5Panel = lazy(() =>
    import(/* webpackChunkName: "Test5Panel" */ "../Test5Panel")
  );
  const panelMap = {
    [Config.panel_names.TEST1]: Test1Panel,
    [Config.panel_names.TEST2]: Test2Panel,
    [Config.panel_names.TEST3]: Test3Panel,
    [Config.panel_names.TEST4]: Test4Panel,
    [Config.panel_names.TEST5]: Test5Panel,
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

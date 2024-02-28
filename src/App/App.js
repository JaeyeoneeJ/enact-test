import ThemeDecorator from "@enact/sandstone/ThemeDecorator";
import MainView from "../views/MainView/MainView";

const AppBase = () => {
  return <MainView />;
};

const App = ThemeDecorator({ noAutoFocus: true }, AppBase);

export default App;

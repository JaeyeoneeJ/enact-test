import { Header } from "@enact/sandstone/Panels";
import { TButton, TPanel } from "../components";

const TestPanel = () => {
  return (
    <TPanel>
      <Header title="Test!" />
      <TButton>Test Button</TButton>
    </TPanel>
  );
};

export default TestPanel;

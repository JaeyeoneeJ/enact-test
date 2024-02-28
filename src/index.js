import { createRoot } from "react-dom/client";
import store from "./store/store";
import { Provider } from "react-redux";

import App from "./App";

let appElement = (
  <Provider store={store}>
    <App />
  </Provider>
);

// In a browser environment, render instead of exporting
if (typeof window === "object") {
  createRoot(document.getElementById("root")).render(appElement);
  appElement = null;
  window.store = store;
}

export default appElement;

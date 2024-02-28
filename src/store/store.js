import { configureStore } from "@reduxjs/toolkit";
import panelsReducer from "../features/panels/panelsSlice";

export default configureStore({
  reducer: { panels: panelsReducer },
});

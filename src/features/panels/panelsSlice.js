import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  panels: [],
  isModalOpen: false,
};

export const panels = createSlice({
  name: "panels",
  initialState,
  reducers: {
    addPanels: (state, action) => {
      if (!action.payload.panelInfo) {
        action.payload.panelInfo = {};
      }
      const newState = [];

      for (let index in state.panels) {
        if (state.panels[index].name !== action.payload.name) {
          newState.push(state.panels[index]);
        }
      }

      newState.push(action.payload);

      state.panels = newState;
    },
    popPanel: (state, action) => {
      let existIndex = -1;
      if (action?.payload) {
        for (let index in state.panels) {
          if (state.panels[index].name === action.payload) {
            existIndex = index;
            break;
          }
        }
      }
      if (existIndex >= 0) {
        // exist
        state.panels = [
          ...state.panels.filter((value) => value.name !== action.payload),
        ];
      }
      if (!action.payload) {
        state.panels = [...state.panels.slice(0, state.panels.length - 1)];
      }
    },
    updatePanel: (state, action) => {
      let existIndex = -1;
      for (let index in state.panels) {
        if (state.panels[index].name === action.payload.name) {
          existIndex = index;
          break;
        }
      }
      if (existIndex >= 0 && action.payload.panelInfo) {
        state.panels[existIndex].panelInfo = Object.assign(
          {},
          state.panels[existIndex].panelInfo,
          action.payload.panelInfo
        );
      }
    },
    updateModalStatus: (state, action) => {
      state.isModalOpen = action.payload;
    },
    resetPanels: (state, action) => {
      state.isModalOpen = false;
      if (action.payload) {
        action.payload.forEach(function (panel) {
          if (!panel.panelInfo) {
            panel.panelInfo = {};
          }
        });
      }
      state.panels = action.payload ? action.payload : [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addPanels,
  popPanel,
  updatePanel,
  updateModalStatus,
  resetPanels,
} = panels.actions;

export default panels.reducer;

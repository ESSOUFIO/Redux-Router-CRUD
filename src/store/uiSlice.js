import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { delModal: false },
  reducers: {
    showDelModal(state) {
      state.delModal = true;
    },

    hideDelModal(state) {
      state.delModal = false;
    },
  },
});

export const { showDelModal, hideDelModal } = uiSlice.actions;
export default uiSlice.reducer;

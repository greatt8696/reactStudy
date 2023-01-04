import { createAction, createSlice, Dispatch } from "@reduxjs/toolkit";

export const layoutSlice = createSlice({
  name: "layout",

  initialState: {
    actvieNotificate: false,
    actvieLoading: true,
    actvieSideBar: false,
    actvieModal: true,
    actvieToast: true,
    isDarkTheme: false,
  },

  reducers: {
    onNotificate: (state) => {
      state.actvieNotificate = true;
    },
    offNotificate: (state) => {
      state.actvieNotificate = false;
    },
    onLoading: (state) => {
      state.actvieLoading = true;
    },
    offLoading: (state) => {
      state.actvieLoading = false;
    },
    onSideBar: (state) => {
      state.actvieSideBar = true;
    },
    offSideBar: (state) => {
      state.actvieSideBar = false;
    },
    switchSideBar: (state) => {
      state.actvieSideBar = !state.actvieSideBar;
    },
    onModal: (state) => {
      state.actvieModal = true;
    },
    offModal: (state) => {
      state.actvieModal = false;
    },
    onToast: (state) => {
      state.actvieToast = true;
    },
    offToast: (state) => {
      state.actvieToast = false;
    },
    onDark: (state) => {
      state.isDarkTheme = true;
    },
    offDark: (state) => {
      state.isDarkTheme = false;
    },
  },
});

export const {
  onNotificate,
  offNotificate,
  onLoading,
  offLoading,
  onSideBar,
  offSideBar,
  onModal,
  offModal,
  onToast,
  offToast,
  switchSideBar,
} = layoutSlice.actions;

export const selectLayout = (state) => state.layout;
export const selectSideBar = (state) => state.layout.actvieSideBar;
export const selectNotificate = (state) => state.layout.actvieNotificate;

export default layoutSlice.reducer;

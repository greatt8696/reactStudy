import { createSlice } from "@reduxjs/toolkit";
import produce from "immer";

export const userSlice = createSlice({
  name: "user",

  initialState: {
    isLogin: true,
    user: {
      name: "죠르디",
      nickname: "0A0D3D82",
      email: "zyoreudi@gmail.com",
      point: 100,
    },
  },

  reducers: {
    loginAndSetUesr: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload;
        draft.isLogin = true;
      }),
    logout: (state) =>
      produce(state, (draft) => {
        draft.user = {};
        draft.isLogin = false;
      }),
  },
});

export const { loginAndSetUesr, logout } = userSlice.actions;
export const selectIsLogin = (state) => state.isLogin;
export const selectCount = (state) => state.user;

export default userSlice.reducer;

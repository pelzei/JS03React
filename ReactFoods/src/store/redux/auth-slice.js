import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isAuth: false },
  reducers: {
    setLoggedIn(state) {
      state.isAuth = true;
    },
    setLoggedOut(state) {
      state.isAuth = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;

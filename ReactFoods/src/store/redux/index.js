import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./auth-slice";
import cartSlice from "./cart-slice";
import foodsSlice from "./foods-slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
    foods: foodsSlice.reducer,
  },
});

export default store;

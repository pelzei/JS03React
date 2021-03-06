import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      console.log("NEWITEM", newItem);
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity = state.totalQuantity + newItem.quantity;
      state.totalAmount = state.totalAmount + newItem.quantity * newItem.price;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: newItem.quantity,
          totalPrice: newItem.price * newItem.quantity,
        });
      } else {
        existingItem.quantity = existingItem.quantity + newItem.quantity;
        existingItem.totalPrice =
          existingItem.totalPrice + newItem.price * newItem.quantity;
      }

      console.log("TOTAL QUANTITY", state.totalQuantity);
      console.log("TOTAL PRICE", state.totalAmount);
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      console.log("ID", id);
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.totalAmount = state.totalAmount - existingItem.price;
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
        state.totalAmount = state.totalAmount - existingItem.price;
      }
    },
    clearCart(state, action) {
      const cartContent = action.payload;
      console.log(cartContent);
      state = cartContent;

      return state;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;

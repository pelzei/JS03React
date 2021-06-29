import { createSlice } from "@reduxjs/toolkit";

const foodsSlice = createSlice({
  name: "foods",
  initialState: { items: [] },
  reducers: {
    setFoods(state, action) {
      state.items = action.payload;
      console.log("FROM STATE", state.items);
    },
  },
});

export const foodsActions = foodsSlice.actions;

export default foodsSlice;

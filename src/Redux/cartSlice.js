import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    items: [],
    hotels: null,
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    addList: (state, action) => {
      state.hotels = action.payload;
    },
    removeitem: (state) => {
      state.items.pop();
    },
    clearItems: (state) => {
      state.items.length = 0;
    },
  },
});
export const { addItem, removeitem, clearItems, addList } = cartSlice.actions;
export default cartSlice.reducer;

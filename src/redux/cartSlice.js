import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: null,
    cartItems: [],
    showCart: false,
  },
  reducers: {
    addItem: (state, { payload }) => {
      state.cartItems.push(payload);
    },
    updateAmount: (state, { payload }) => {
      state.cartItems[payload.index].amount =
        Number(state.cartItems[payload.index].amount) + Number(payload.amount);
    },
    setAmount: (state, { payload }) => {
      state.cartItems[payload.index].amount = payload.amount;
    },
    removeItem: (state, { payload }) => {
      state.cartItems.splice(payload.index, 1);
    },
    setShowCart: (state, { payload }) => {
      state.showCart = payload;
    },
    setItems: (state, { payload }) => {
      state.items = payload;
    },
    setCartItems: (state, { payload }) => {
      state.cartItems = payload;
    },
  },
});

export const {
  addItem,
  updateAmount,
  removeItem,
  setAmount,
  setShowCart,
  setCartItems,
  setItems,
} = cartSlice.actions;

export default cartSlice.reducer;

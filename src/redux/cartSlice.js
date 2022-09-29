import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
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
} = cartSlice.actions;

export default cartSlice.reducer;

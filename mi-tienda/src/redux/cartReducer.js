import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: [] },

  reducers: {
    addProduct: (state, action) => {
      const existingProduct = state.cart.find((p) => p.id === action.payload.id);
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },

    increaseQuantity: (state, action) => {
      const product = state.cart.find((p) => p.id === action.payload);
      if (product) product.quantity++;
    },

    decreaseQuantity: (state, action) => {
      const product = state.cart.find((p) => p.id === action.payload);
      if (product && product.quantity > 1) {
        product.quantity--;
      } else {
        state.cart = state.cart.filter((p) => p.id !== action.payload);
      }
    },

    removeProduct: (state, action) => {
      state.cart = state.cart.filter((p) => p.id !== action.payload);
    },

    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addProduct, increaseQuantity, decreaseQuantity, removeProduct, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

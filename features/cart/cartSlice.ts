import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { AppState } from "../../app/store";
import { CartProduct } from "../../types";

export interface CartState {
  cart: CartProduct[];
}

const initialState: CartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<CartProduct>) => {
      state.cart = [...state.cart, action.payload];
    },
    removeProduct: (state, action: PayloadAction<CartProduct>) => {
      state.cart = state.cart.filter(
        (p) => p.node.id !== action.payload.node.id
      );
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;

export const selectCart = (state: AppState) => state.cart;

export default cartSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { AppState } from "../../app/store";
import { Product } from "../../types";

export interface CartState {
  cart: Product[];
}

const initialState: CartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.cart.concat(action.payload);
    },
    removeProduct: (state, action: PayloadAction<Product>) => {
      state.cart.filter((p) => p.name !== action.payload.name);
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;

export const selectCart = (state: AppState) => state.cart;

export default cartSlice.reducer;

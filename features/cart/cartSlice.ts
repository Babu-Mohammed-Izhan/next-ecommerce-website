import { createSlice } from "@reduxjs/toolkit";
import type { AppState } from "../../app/store";
import { Product } from "../../types";

export interface CounterState {
  cart: Product[];
}

const initialState: CounterState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, payload) => {},
    removeProduct: (state, payload) => {},
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;

import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import cartReducer from "../features/cart/cartSlice";

export function makeStore() {
  return configureStore({
    reducer: { cart: cartReducer },
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;

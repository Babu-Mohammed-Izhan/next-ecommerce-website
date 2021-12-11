import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import cardReducer from "../features/cart/cartSlice";

export function makeStore() {
  return configureStore({
    reducer: { card: cardReducer },
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;

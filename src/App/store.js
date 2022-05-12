import { configureStore } from "@reduxjs/toolkit";
import { coinsSlice } from "./Slices/coins";
import coinSlice from "./Slices/coin";
import historySlice from "./Slices/history";
export const store = configureStore({
  reducer: {
    coins: coinsSlice.reducer,
    coin: coinSlice.reducer,
    history: historySlice.reducer,
  },
});

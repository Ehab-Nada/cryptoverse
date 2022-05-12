import { createSlice } from "@reduxjs/toolkit";

const initialState = { data: {} };

export const coinsSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = coinsSlice.actions;

export default coinsSlice;

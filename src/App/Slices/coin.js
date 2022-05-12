import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const coinSlice = createSlice({
  name: "coin",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = coinSlice.actions;

export default coinSlice;

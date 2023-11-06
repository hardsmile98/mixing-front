/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    status: 'none',
  },
  reducers: {
    setStatus: (state, { payload }) => {
      state.status = payload;
    },
  },
});

export default orderSlice.reducer;

export const {
  setStatus,
} = orderSlice.actions;

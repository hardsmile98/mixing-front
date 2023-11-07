/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    status: 'none',
    uuid: null,
    mixCode: null,
    feePercent: null,
    transferAddress: null,
    recipientAddresses: null,
  },
  reducers: {
    setOrder: (state, { payload }) => {
      state = payload;
    },
  },
});

export default orderSlice.reducer;

export const {
  setOrder,
} = orderSlice.actions;

/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

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
      state = { ...payload };
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: any) => ({
      ...state,
      ...action.payload.order,
    }));
  },
});

export default orderSlice.reducer;

export const {
  setOrder,
} = orderSlice.actions;

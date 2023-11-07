import { configureStore } from '@reduxjs/toolkit';
import { publicApi } from 'api/publicApi';
import { createWrapper } from 'next-redux-wrapper';
import orderReducer from './slices/order';

export const makeStore = () => configureStore({
  reducer: {
    [publicApi.reducerPath]: publicApi.reducer,
    order: orderReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat([
      publicApi.middleware,
    ]),
});

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = ReturnType<AppStore['dispatch']>;

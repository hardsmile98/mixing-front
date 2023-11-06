import { configureStore } from '@reduxjs/toolkit';
import { publicApi } from 'api/publicApi';
import orderReducer from './slices/order';

export const store = configureStore({
  reducer: {
    [publicApi.reducerPath]: publicApi.reducer,
    order: orderReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat([
      publicApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

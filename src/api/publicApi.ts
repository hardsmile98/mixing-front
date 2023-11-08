/* eslint-disable consistent-return */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import getEnvProps from 'utils/getEnvProps';
import { HYDRATE } from 'next-redux-wrapper';
import { buildEndpoints } from './endpoints';
import tagTypes from './tagTypes';

export const publicApi = createApi({
  reducerPath: 'publicApi',
  baseQuery: fetchBaseQuery({
    baseUrl: getEnvProps.apiUrl,
    credentials: 'include',
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: buildEndpoints,
  tagTypes: Object.values(tagTypes),
});

export const {
  useCreateOrderMutation,
} = publicApi;

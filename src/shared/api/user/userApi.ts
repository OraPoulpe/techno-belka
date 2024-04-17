import { BASE_API } from '@/shared/constants';
import { getAccessToken } from '@/shared/utils/getAccessToken';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'user',
  tagTypes: ['Users'],

  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API,
    headers: {
      Authorization: `Bearer ${
        typeof window !== 'undefined' ? getAccessToken() : ''
      }`,
    },
  }),

  endpoints: () => ({}),
});

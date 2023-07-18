import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// parent to other API Slices

const baseQuery = fetchBaseQuery({ baseUrl: '' });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['User'], // for caching instead of fetching everytime
  endpoints: (builder) => ({}),
});

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define the base URL for the API
const BASE_URL = 'http:https://fsa-book-buddy-b6e748d1380d.herokuapp.com/';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    // User registration
    registerUser: builder.mutation({
      query: (newUser) => ({
        url: '/users/register',
        method: 'POST',
        body: newUser,
      }),
    }),
    // User login
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: '/users/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    // Fetch user details (optional, based on API)
    getUser: builder.query({
      query: (userId) => `/users/${userId}`,
    }),
  }),
});

// Export hooks for each query/mutation
export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetUserQuery,
} = authApi;

export default authApi;

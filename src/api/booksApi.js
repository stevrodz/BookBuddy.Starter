import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define the base URL for the API
const BASE_URL = 'http:https://fsa-book-buddy-b6e748d1380d.herokuapp.com/';

export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    // Fetch all books
    getBooks: builder.query({
      query: () => '/books',
    }),
    // Fetch book details by ID
    getBookById: builder.query({
      query: (id) => `/books/${id}`,
    }),
    // Checkout a book
    checkOutBook: builder.mutation({
      query: ({ bookId, userId }) => ({
        url: `/books/${bookId}`,
        method: 'PATCH',
        body: { checkedOutBy: userId },
      }),
    }),
    // Return a book
    returnBook: builder.mutation({
      query: (bookId) => ({
        url: `/books/${bookId}`,
        method: 'PATCH',
        body: { checkedOutBy: null },
      }),
    }),
    // Add a new book to the catalog
    addBook: builder.mutation({
      query: (newBook) => ({
        url: '/books',
        method: 'POST',
        body: newBook,
      }),
    }),
    // Delete a book from the catalog
    deleteBook: builder.mutation({
      query: (bookId) => ({
        url: `/books/${bookId}`,
        method: 'DELETE',
      }),
    }),
  }),
});

// Export hooks for each query/mutation
export const {
  useGetBooksQuery,
  useGetBookByIdQuery,
  useCheckOutBookMutation,
  useReturnBookMutation,
  useAddBookMutation,
  useDeleteBookMutation,
} = booksApi;

export default booksApi;

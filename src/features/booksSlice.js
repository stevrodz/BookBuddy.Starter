import { createSlice } from '@reduxjs/toolkit';

const booksSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    setBooks(state, action) {
      return action.payload;
    },
    checkOutBook(state, action) {
      return state.map(book =>
        book.id === action.payload.id
          ? { ...book, checkedOutBy: action.payload.userId }
          : book
      );
    },
    returnBook(state, action) {
      return state.map(book =>
        book.id === action.payload.id ? { ...book, checkedOutBy: null } : book
      );
    },
  },
});

export const { setBooks, checkOutBook, returnBook } = booksSlice.actions;
export default booksSlice.reducer;

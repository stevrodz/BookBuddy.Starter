import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { userId: null, email: '', checkedOutBooks: [] },
  reducers: {
    loginUser(state, action) {
      return { ...state, ...action.payload };
    },
    logoutUser() {
      return { userId: null, email: '', checkedOutBooks: [] };
    },
    updateCheckedOutBooks(state, action) {
      state.checkedOutBooks = action.payload;
    },
  },
});

export const { loginUser, logoutUser, updateCheckedOutBooks } = userSlice.actions;
export default userSlice.reducer;

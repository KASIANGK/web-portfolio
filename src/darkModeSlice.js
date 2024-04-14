import { createSlice } from '@reduxjs/toolkit';

export const darkSlice = createSlice({
  name: 'dark',
  initialState: {
    darkMode: false
  },
  reducers: {
    toggleDarkMode: state => {
      state.darkMode = !state.darkMode;
    }
  },
});

export const { toggleDarkMode } = darkSlice.actions;

export default darkSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const emotionSlice = createSlice({
  name: 'emotions',
  initialState: {
    currentMood: null,
    history: [],
  },
  reducers: {
    setMood: (state, action) => {
      state.currentMood = action.payload;
    },
    setHistory: (state, action) => {
      state.history = action.payload;
    },
  },
});

export const { setMood, setHistory } = emotionSlice.actions;
export default emotionSlice.reducer; // <--- Ye line missing thi
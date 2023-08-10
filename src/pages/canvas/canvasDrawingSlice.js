// canvasDrawingsSlice.js

import { createSlice } from '@reduxjs/toolkit';

export const canvasDrawingsSlice = createSlice({
  name: 'canvasDrawings',
  initialState: [],
  reducers: {
    addCanvasDrawing: (state, action) => {
      state.push(action.payload);
      console.log('Drawing saved:');
    },
    clearCanvasDrawings: (state) => {
      return [];
    },
  },
});

export const { addCanvasDrawing, clearCanvasDrawings } = canvasDrawingsSlice.actions;
export default canvasDrawingsSlice.reducer;

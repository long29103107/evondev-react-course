import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      return { ...state, count: state.count + 1 };
    },
    decrement: (state) => {
      return { ...state, count: state.count - 1 };
    },
    incrementByValue: (state, action) => {
      return { ...state, count: state.count + Number(action.payload) };
    },
  },
});

export const { increment, decrement, incrementByValue } = counterSlice.actions;
export default counterSlice.reducer;

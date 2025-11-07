import { createSlice } from '@reduxjs/toolkit';
import data from '../../data/data.json'; 

const requests = JSON.parse(localStorage.getItem('requests')) || data.requests;

const requestSlice = createSlice({
  name: 'request',
  initialState: { 
    list: requests,
    isLoading: false,
    isError: false
  },

  reducers: {
    requestStart: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    requestSuccess: (state, action) => {
      state.list.push(action.payload);
      localStorage.setItem('requests', JSON.stringify(state.list));
      state.isLoading = false;
    },
    requestFail: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
    updateState: (state, action) => {
      const req = state.list.find(r => r.id === action.payload.id);
      if (req) req.state = action.payload.state;
      localStorage.setItem('requests', JSON.stringify(state.list));
    },
    resetRequestState: (state) => {
      state.isLoading = false;
      state.isError = false;
    }
  },
});

export const { requestStart, requestSuccess, requestFail, updateState, resetRequestState } = requestSlice.actions;
export default requestSlice.reducer;

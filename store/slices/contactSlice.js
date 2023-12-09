import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  isSent: false,
  error: null,
};

const contactSlice = createSlice({
  name: "contact_slice",
  initialState: {
    ...initialState,
  },
  reducers: {
    start: (state) => {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },
    success: (state) => {
      return {
        ...state,
        loading: false,
        isSent: true,
      };
    },
    fail: (state, action) => {
      const { payload } = action;
      return {
        ...state,
        loading: false,
        error: payload,
      };
    },
    reset: () => {
      return {
        ...initialState,
      };
    },
  },
});

export const { start, success, fail, reset } = contactSlice.actions;

export const contactReducer = contactSlice.reducer;

export default contactSlice;

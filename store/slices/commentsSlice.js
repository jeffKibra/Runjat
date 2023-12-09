import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  isModified: false,
  comments: null,
  error: null,
  action: null,
};

const commentsSlice = createSlice({
  name: "comments_slice",
  initialState: {
    ...initialState,
  },
  reducers: {
    start: (state, action) => {
      const { payload } = action;
      return {
        ...state,
        loading: true,
        error: null,
        action: payload,
      };
    },
    success: (state) => {
      return {
        ...state,
        loading: false,
        isModified: true,
      };
    },
    commentsSuccess: (state, action) => {
      const { payload } = action;
      return {
        ...state,
        loading: false,
        comments: payload,
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

export const { start, success, commentsSuccess, fail, reset } =
  commentsSlice.actions;

export const commentsReducer = commentsSlice.reducer;

export default commentsSlice;

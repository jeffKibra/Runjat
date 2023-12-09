import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import { contactReducer } from "./slices/contactSlice";
import { commentsReducer } from "./slices/commentsSlice";
import { toastReducer } from "./slices/toastSlice";

import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    contactReducer,
    commentsReducer,
    toastReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false, thunk: false }).concat(
      sagaMiddleware
    ),
});

sagaMiddleware.run(rootSaga);

export default store;

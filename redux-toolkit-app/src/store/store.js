import { configureStore } from "@reduxjs/toolkit";
import BookReducer from "../slices/BookSlice";

const store = configureStore({
  reducer: {
    book: BookReducer,
  },
});

export default store;

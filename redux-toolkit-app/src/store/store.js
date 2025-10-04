import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../slices/todoslice";

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;

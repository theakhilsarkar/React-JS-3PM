import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../slices/productSlice";

const store = configureStore({
  reducer: {
    product: ProductReducer,
  },
});

export default store;

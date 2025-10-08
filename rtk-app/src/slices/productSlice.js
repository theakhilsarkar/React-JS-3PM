import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// use
// redux toolkit
// 5 todo,book,note,expanse,contact,ecom
// 

const initialState = {
  products: [],
  isLoding: true,
  error: null,
};

export const fetchProducts = createAsyncThunk("products/get", async () => {
  const res = await fetch("http://localhost:3000/products"); // get,post,put,delete
  const data = await res.json();
  return data;
});

export const insertProduct = createAsyncThunk(
  "products/post",
  async ({ title, price }) => {
    const res = await axios.post("http://localhost:3000/products", {
      title: title,
      price: price,
    });
    console.log(res.data);
    return res.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoding = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoding = false;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.isLoding = false;
        state.error = "cant fetch products....";
      })
      .addCase(insertProduct.pending, (state) => {
        state.isLoding = true;
      })
      .addCase(insertProduct.fulfilled, (state, action) => {
        state.isLoding = false;
        state.products.push(action.payload); // to add live data in ui, temporory
      })
      .addCase(insertProduct.rejected, (state) => {
        state.isLoding = false;
        state.error = "Cant insert product !!!";
      });
  },
});

export default productSlice.reducer;
export const { addProduct } = productSlice.actions;

// crud - json server

// FAQ

// 10 --> 6

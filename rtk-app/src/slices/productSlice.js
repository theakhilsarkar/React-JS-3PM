import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// use
// redux toolkit
// 5 todo,book,note,expanse,contact,ecom

const initialState = {
  products: [],
  isLoding: true,
  error: null,
};

export const fetchProducts = createAsyncThunk("products/get", async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
});

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
      });
  },
});

export default productSlice.reducer;
export const { addProduct } = productSlice.actions;

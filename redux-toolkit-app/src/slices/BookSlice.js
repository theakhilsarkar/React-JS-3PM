import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: ["Experiment of Truth"],
  favList: [],
  total: 120,
  visitors: 433,
};

const bookSlice = createSlice({
  name: "book",
  initialState: initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },

    removeBook: (state, action) => {
      state.books.splice(action.payload, 1);
    },

    updateBook: (state, action) => {
      //index,value
      const { index, value } = action.payload;
      state.books[index] = value;
    },

    addToFavourite: (state, action) => {
      state.favList.push(action.payload);
    },
  },
});

export default bookSlice.reducer;
export const { addBook, removeBook, updateBook, addToFavourite } =
  bookSlice.actions;

  // book slice - CRUD
  // how to perform network request in rtk
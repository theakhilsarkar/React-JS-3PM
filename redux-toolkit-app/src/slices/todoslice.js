import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  //   initialState: {
  //     products: [],
  //     carts: [],
  //     fav: [],
  //   },
  initialState: {
    message: "this is todo slice",
    todos: [],
  },
  // actions - logic - method(state operation)
  reducers: {
    addTodo: (state, action) => {
      const data = action.payload; 
      // to get passed data from param from function
      state.todos.push(data);
    },
    removeTodo: (state, action) => {},
    updateTodo: (state, action) => {},
  },
});

export default todoSlice.reducer; // for store
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
 // for UI

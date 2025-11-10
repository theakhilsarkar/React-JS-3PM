import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

export const signIn = createAsyncThunk(
  "user/signin",
  async ({ email, password }) => {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = {
      name: userCredential.user.displayName,
      email: userCredential.user.email,
    };
    return user;
  }
);

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.users.push(action.payload);
        state.isLoading = false;
        alert("user signin successfully !!");
      })
      .addCase(signIn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = "signin failed !!";
      });
  },
});

export default userSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth, db } from "../firebase";
import { collection, addDoc, getDocs, setDoc, doc } from "firebase/firestore";
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
    // if we use addDoc then everytime new doc id will generate, so same user will add multiple time in db
    // await addDoc(collection(db, "users"), user);
    // we will use setDoc to specify own docid
    await setDoc(doc(db, "users", email), user);
    return user;
  }
);

export const signUp = createAsyncThunk(
  "user/signup",
  async ({ email, password }) => {
    const userCredential = await createUserWithEmailAndPassword(
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

export const fetchUsers = createAsyncThunk("user/fetch", async () => {
  const querySnapshot = await getDocs(collection(db, "users"));
  const users = querySnapshot.docs.map((doc) => doc.data());
  console.log("--fetch user called ???");
  return users;
});

const initialState = {
  users: [],
  currentUser: {},
  isLoading: false,
  error: null,
};
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    getUser: (state) => {
      state.currentUser = JSON.parse(localStorage.getItem("user") || "{}");
      console.log("get user called !!", state.currentUser.email);
    },
    getCurrentUser: (state) => {
      // state.currentUser = {
      //   // name: auth.currentUser.displayName,
      //   // email: auth.currentUser.email,
      // };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        const user = action.payload;
        const isCheck = state.users.find((e) => e.email == user.email);
        if (!isCheck) {
          state.users.push(user);
        }
        localStorage.setItem("user", JSON.stringify(user));
        state.currentUser = user; // stored signed in user info in current user
        state.isLoading = false;
      })
      .addCase(signIn.rejected, (state) => {
        state.isLoading = false;
        state.error = "signin failed !!";
      })
      .addCase(signUp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.users.push(action.payload);
        state.isLoading = false;
        alert("signup sucessfully !!");
      })
      .addCase(signUp.rejected, (state) => {
        state.error = "signup failed !";
        state.isLoading = false;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      });
  },
});

export default userSlice.reducer;
export const { getUser, getCurrentUser } = userSlice.actions;

// 4xx - client side bad request
// 5xx - server side issue
// 2xx - sucess - OK

// signup -->

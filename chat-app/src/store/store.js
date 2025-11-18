import userReducer from "../slices/userSlice";
import chatReducer from "../slices/chatSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    user: userReducer,
    chats: chatReducer,
  },
});

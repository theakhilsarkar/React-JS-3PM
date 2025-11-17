import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../firebase";
import { doc, collection, setDoc, addDoc, getDocs } from "firebase/firestore";

// chatroom(collection) -> sender_receiver(doc id) -> chats(collection) -> user chats(docs)

export const sendMessage = createAsyncThunk(
  "chat/send",
  async ({ sender, receiver }) => {
    const docId = sender + "_" + receiver; // admin@gmail.com_admin1@gmail.com
    const chatId = Date.now().toLocaleString();
    try {
      await setDoc(doc(db, "chatroom", docId, "chats", chatId), {
        message: "hello !!",
      });
    } catch (e) {
      console.log(e);
    }
  }
);

const initialState = {
  chats: [],
  isLoading: false,
  error: null,
};

const chatSlice = createSlice({
  name: "chats",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(sendMessage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendMessage.fulfilled, (state) => {
        state.isLoading = false;
        alert("chat sended successfully");
      })
      .addCase(sendMessage.rejected, (state) => {
        state.error = "message cant send !";
        alert("message cant send !");
      });
  },
});

export default chatSlice.reducer;

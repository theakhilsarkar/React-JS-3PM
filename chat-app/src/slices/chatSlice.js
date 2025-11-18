import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../firebase";
import { doc, collection, setDoc, addDoc, getDocs } from "firebase/firestore";

// chatroom(collection) -> sender_receiver(doc id) -> chats(collection) -> user chats(docs)

export const readMessages = createAsyncThunk(
  "chat/read",
  async ({ sender, receiver }) => {
    const docId = sender + "_" + receiver;
    console.log(sender, receiver);
    try {
      const snapshots = await getDocs(
        collection(db, "chatroom", docId, "chats")
      );
      console.log(snapshots.size + "******************");
      const chatList = snapshots.docs.map((snap) => snap.data());
      console.log("try block running");
      console.log(chatList + "-----------------------");
      return chatList;
    } catch (e) {
      console.log("catch block running");
      console.log(e);
    }
  }
);

export const sendMessage = createAsyncThunk(
  "chat/send",
  async ({ message, sender, receiver }) => {
    const docId = sender + "_" + receiver; // admin@gmail.com_admin1@gmail.com
    const chatId = Date.now().toLocaleString();
    try {
      await setDoc(doc(db, "chatroom", docId, "chats", chatId), {
        message: message,
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
      })
      .addCase(readMessages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(readMessages.fulfilled, (state, action) => {
        state.chats = action.payload;
        state.isLoading = false;
        console.log(action.payload);
        console.log(state.chats);
        console.log("chat fetched successfully !");
      })
      .addCase(readMessages.rejected, (state) => {
        state.error = "chat cant fetched !!";
        console.log(state.error);
      });
  },
});

export default chatSlice.reducer;

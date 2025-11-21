import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../firebase";
import {
  doc,
  collection,
  setDoc,
  addDoc,
  getDocs,
  deleteDoc,
} from "firebase/firestore";

// chatroom(collection) -> sender_receiver(doc id) -> chats(collection) -> user chats(docs)

const docIdGenerator = (sender, receiver) => {
  const users = [sender, receiver];
  users.sort();
  const docId = users[0] + "_" + users[1];
  return docId;
};

export const readMessages = createAsyncThunk(
  "chat/read",
  async ({ sender, receiver }) => {
    const docId = docIdGenerator(sender, receiver);
    try {
      const snapshots = await getDocs(
        collection(db, "chatroom", docId, "chats")
      );
      const chatList = snapshots.docs.map((snap) => snap.data());
      return chatList;
    } catch (e) {
      console.log(e);
      return [];
    }
  }
);

export const sendMessage = createAsyncThunk(
  "chat/send",
  async ({ message, sender, receiver }) => {
    const docId = docIdGenerator(sender, receiver);

    const chatId = Date.now().toLocaleString();
    // const date = new Date();
    try {
      await setDoc(doc(db, "chatroom", docId, "chats", chatId), {
        chatId: chatId,
        sender: sender,
        message: message,
        // time: date,
      });
    } catch (e) {
      console.log(e);
    }
  }
);

export const deleteMessage = createAsyncThunk(
  "chat/delete",
  async ({ sender, receiver, chatId }) => {
    const docId = docIdGenerator(sender, receiver);
    await deleteDoc(doc(db, "chatroom", docId, "chats", chatId));
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
      })
      .addCase(sendMessage.rejected, (state) => {
        state.error = "message cant send !";
        alert("message cant send !");
      })
      .addCase(readMessages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(readMessages.fulfilled, (state, action) => {
        console.log(action.payload);
        state.chats = action.payload;
        state.isLoading = false;
      })
      .addCase(readMessages.rejected, (state) => {
        state.error = "chat cant fetched !!";
        console.log(state.error);
      })
      .addCase(deleteMessage.fulfilled, (state) => {
        alert("message deleted !");
      });
  },
});

export default chatSlice.reducer;

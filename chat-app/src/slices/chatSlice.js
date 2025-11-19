import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../firebase";
import { doc, collection, setDoc, addDoc, getDocs } from "firebase/firestore";

// chatroom(collection) -> sender_receiver(doc id) -> chats(collection) -> user chats(docs)

export const readMessages = createAsyncThunk(
  "chat/read",
  async ({ sender, receiver }) => {
    const users = [sender, receiver];
    console.log(users);
    users.sort();
    console.log(users);
    const docId = users[0] + "_" + users[1];
    console.log(docId);

    try {
      const snapshots = await getDocs(
        collection(db, "chatroom", docId, "chats")
      );
      const chatList = snapshots.docs.map((snap) => snap.data());
      return chatList;
    } catch (e) {
      console.log(e);
    }
  }
);

export const sendMessage = createAsyncThunk(
  "chat/send",
  async ({ message, sender, receiver }) => {
    const users = [sender, receiver];
    users.sort();
    const docId = users[0] + "_" + users[1];

    const chatId = Date.now().toLocaleString();
    try {
      await setDoc(doc(db, "chatroom", docId, "chats", chatId), {
        sender: sender,
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
      })
      .addCase(readMessages.rejected, (state) => {
        state.error = "chat cant fetched !!";
        console.log(state.error);
      });
  },
});

export default chatSlice.reducer;

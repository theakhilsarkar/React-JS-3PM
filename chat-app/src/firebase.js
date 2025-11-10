import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCm3x3M56g_mShP_Lwobq6z4OE28RavC6I",
  authDomain: "fir-3pm-7c549.firebaseapp.com",
  projectId: "fir-3pm-7c549",
  storageBucket: "fir-3pm-7c549.firebasestorage.app",
  messagingSenderId: "257664725557",
  appId: "1:257664725557:web:3793061580d4f86753b77c",
  measurementId: "G-35Y4ZCC3JR",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

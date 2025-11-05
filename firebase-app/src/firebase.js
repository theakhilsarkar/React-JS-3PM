import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCm3x3M56g_mShP_Lwobq6z4OE28RavC6I",
  authDomain: "fir-3pm-7c549.firebaseapp.com",
  projectId: "fir-3pm-7c549",
  storageBucket: "fir-3pm-7c549.firebasestorage.app",
  messagingSenderId: "257664725557",
  appId: "1:257664725557:web:3793061580d4f86753b77c",
  measurementId: "G-35Y4ZCC3JR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// to initialize authentication
export const auth = getAuth(app);


// configuration = information
// credntial = details

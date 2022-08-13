// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFQiZY67Awy4DtwT2nq5cDLxo9PNj3QHs",
  authDomain: "react-authentication-837c4.firebaseapp.com",
  projectId: "react-authentication-837c4",
  storageBucket: "react-authentication-837c4.appspot.com",
  messagingSenderId: "736564357350",
  appId: "1:736564357350:web:2dee888c5a11d0b935b327",
  measurementId: "G-WRHYVMVZJY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
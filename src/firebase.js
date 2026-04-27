// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUeW677i1iGZBk8lKfcrOHITxVkA0gl44",
  authDomain: "auth-project-6f008.firebaseapp.com",
  projectId: "auth-project-6f008",
  storageBucket: "auth-project-6f008.firebasestorage.app",
  messagingSenderId: "540853040268",
  appId: "1:540853040268:web:91111ea19cba591e84f7a9",
  measurementId: "G-10CHHLW6R6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(auth);
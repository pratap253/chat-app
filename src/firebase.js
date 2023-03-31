import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "chat-c2a9f.firebaseapp.com",
  projectId: "chat-c2a9f",
  storageBucket: "chat-c2a9f.appspot.com",
  messagingSenderId: "671065292678",
  appId: "1:671065292678:web:d46a00b17b4bbf95a8f607",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);

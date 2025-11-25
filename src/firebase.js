// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // 🔹 Firestore 추가!

const firebaseConfig = {
  apiKey: "AIzaSyAupOiz55KzlUuiS2odb48rDcY-2CGJ_ao",
  authDomain: "worldmap-c905a.firebaseapp.com",
  projectId: "worldmap-c905a",
  storageBucket: "worldmap-c905a.firebasestorage.app", // 콘솔 값 그대로
  messagingSenderId: "1034060474311",
  appId: "1:1034060474311:web:8de5fb666e6f4fb2e5dbe2",
  measurementId: "G-40B2DQVJP7",
};

const app = initializeApp(firebaseConfig);

// 🔹 Auth
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// 🔹 Firestore DB (이게 핵심!)
export const db = getFirestore(app);

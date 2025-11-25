// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyAupOiz55KzlUuiS2odb48rDcY-2CGJ_ao",
  authDomain: "worldmap-c905a.firebaseapp.com",
  projectId: "worldmap-c905a",
  storageBucket: "worldmap-c905a.firebasestorage.app", 
  messagingSenderId: "1034060474311",
  appId: "1:1034060474311:web:8de5fb666e6f4fb2e5dbe2",
  measurementId: "G-40B2DQVJP7",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();


export const db = getFirestore(app);

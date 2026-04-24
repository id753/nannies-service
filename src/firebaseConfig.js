import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "nanniesapp-4b54d.firebaseapp.com",
  databaseURL:
    "https://nanniesapp-4b54d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "nanniesapp-4b54d",
  storageBucket: "nanniesapp-4b54d.appspot.com",
  messagingSenderId: "...",
  appId: "...",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);

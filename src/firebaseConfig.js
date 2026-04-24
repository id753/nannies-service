import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyByRiqUrtatYgk7IfadvytPZ5_Vh1arFOY",
  authDomain: "nanniesapp-4b54d.firebaseapp.com",
  databaseURL:
    "https://nanniesapp-4b54d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "nanniesapp-4b54d",
  storageBucket: "nanniesapp-4b54d.firebasestorage.app",
  messagingSenderId: "548645001643",
  appId: "1:548645001643:web:89622b65bb7330436d5aee",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);

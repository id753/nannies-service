import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "./firebaseConfig";

// Регистрация
export const signUp = async (email: string, pass: string, name: string) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, pass);
  await updateProfile(user, { displayName: name });
  return user;
};

// Логин
export const logIn = async (email: string, pass: string) => {
  return await signInWithEmailAndPassword(auth, email, pass);
};

// Логаут
export const logOut = async () => {
  return await auth.signOut();
};

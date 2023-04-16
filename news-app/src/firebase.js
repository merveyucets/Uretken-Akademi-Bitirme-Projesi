import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { toast } from "react-hot-toast";

const firebaseConfig = {
  apiKey: "AIzaSyAg05Ds_WP91sQ5r54M0DLM4HKizgLJ5Og",
  authDomain: "news-app-bd249.firebaseapp.com",
  projectId: "news-app-bd249",
  storageBucket: "news-app-bd249.appspot.com",
  messagingSenderId: "692287099931",
  appId: "1:692287099931:web:75fd4b2c89d37d856d54be",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
export const register = async (email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return user;
  } catch (error) {
    toast.error(error.message);
  }
};

export const login = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    toast.error(error.message);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    toast.error(error.message);
  }
};

export default app;
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDWOkQ5XFgRRc5rychPYfEBf-3cvZdqco",
  authDomain: "e-commerce-97e57.firebaseapp.com",
  projectId: "e-commerce-97e57",
  storageBucket: "e-commerce-97e57.firebasestorage.app",
  messagingSenderId: "668679542612",
  appId: "1:668679542612:web:d66ece94c899c218059ac1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };

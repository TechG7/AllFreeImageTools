import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  RecaptchaVerifier,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged,
  updateProfile,
  signInWithPhoneNumber
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCR4mUxegTnOM2ECvaHkGbarEpneW4muYc",
  authDomain: "all-free-image-tools.firebaseapp.com",
  projectId: "all-free-image-tools",
  storageBucket: "all-free-image-tools.firebasestorage.app",
  messagingSenderId: "246434018521",
  appId: "1:246434018521:web:e5ec006db60dbcaa9ffac8",
  measurementId: "G-D77DYY38G6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export {
  auth,
  googleProvider,
  RecaptchaVerifier,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged,
  updateProfile,
  signInWithPhoneNumber
};

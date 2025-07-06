

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getDatabase, ref, push, onValue, set } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlNHkA1f-1GwBN0nBchMtIwEYUNLlq8FQ",
  authDomain: "e-commerce-a6fe2.firebaseapp.com",
  databaseURL: "https://e-commerce-a6fe2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "e-commerce-a6fe2",
  storageBucket: "e-commerce-a6fe2.firebasestorage.app",
  messagingSenderId: "169688929056",
  appId: "1:169688929056:web:8d04f0b02c98fa77d1bd45",
  measurementId: "G-Q8FP7FQQHV"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

window.firebaseApp = app;
window.firebaseDB = db;
window.firebaseAuth = auth;
window.firebaseRef = ref;
window.firebasePush = push;
window.firebaseOn = onValue;
window.firebaseSet = set;
window.firebaseLogin = signInWithEmailAndPassword;
window.firebaseAuthState = onAuthStateChanged;


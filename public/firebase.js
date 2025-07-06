

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getDatabase, ref, push, onValue, set } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpv9uvfdUPKnyBKESB2fDEUwuDn9Nzmtg",
  authDomain: "orderr-625c2.firebaseapp.com",
  databaseURL: "https://orderr-625c2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "orderr-625c2",
  storageBucket: "orderr-625c2.firebasestorage.app",
  messagingSenderId: "891679772111",
  appId: "1:891679772111:web:1b5999b967bd17c87356ba",
  measurementId: "G-06W3BTP7HH"
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


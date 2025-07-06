

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getDatabase, ref, push, onValue, set } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSKBHxE8YIDFsEW-8TpGSOHuZJ5CliIkg",
  authDomain: "fingerpinauth.firebaseapp.com",
  databaseURL: "https://fingerpinauth-default-rtdb.firebaseio.com",
  projectId: "fingerpinauth",
  storageBucket: "fingerpinauth.firebasestorage.app",
  messagingSenderId: "395896869935",
  appId: "1:395896869935:web:f05223a2c140bd88d662da",
  measurementId: "G-6S5NHHLFW0"
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


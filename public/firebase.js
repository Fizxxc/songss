

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getDatabase, ref, push, onValue, set } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    databaseURL: "YOUR_DB_URL",
    appId: "YOUR_APP_ID"
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


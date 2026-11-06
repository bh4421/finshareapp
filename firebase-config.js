// Firebase SDK import kar rahe hain (CDN ke zariye taaki bina node.js ke seedha browser me chale)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Apni Firebase Console wali details yahan dalein
const firebaseConfig = {
  apiKey: "YOUR_API_KEY_YAHAN_DALEN",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Firebase app initialize karein
const app = initializeApp(firebaseConfig);

// Firestore Database instance export karein taaki index.html aur admin.html me use ho sake
const db = getFirestore(app);

export { db };


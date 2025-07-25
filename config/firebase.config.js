// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "movienow-8ee41.firebaseapp.com",
  projectId: "movienow-8ee41",
  storageBucket: "movienow-8ee41.firebasestorage.app",
  messagingSenderId: "399245264477",
  appId: "1:399245264477:web:1d34e288b9321e48026fb4",
};

// Initialize Firebase
const app = getApps().length == 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "safeer-blog.firebaseapp.com",
  projectId: "safeer-blog",
  storageBucket: "safeer-blog.appspot.com",
  messagingSenderId: "576049351809",
  appId: "1:576049351809:web:d6a7d4e12ae303b9835180",
  measurementId: "G-J5J3K55QBX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDG0Q0SmfBQn-Yeq1PO8Ar4l5iaINmx-RQ",
  authDomain: "learn-firebase-d16c5.firebaseapp.com",
  projectId: "learn-firebase-d16c5",
  storageBucket: "learn-firebase-d16c5.firebasestorage.app",
  messagingSenderId: "785957773110",
  appId: "1:785957773110:web:00dc8c3fcb9fef5af81d97",
  measurementId: "G-3SPQ5HXRKK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
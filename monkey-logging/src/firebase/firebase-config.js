import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCPhUEWH9yrPn7CfdfnLrzAzec0iO4xQ9g",
    authDomain: "[monkey-blogging-9278c.firebaseapp.com](http://monkey-blogging-9278c.firebaseapp.com/)",
    projectId: "monkey-blogging-9278c",
    storageBucket: "monkey-blogging-9278c.firebasestorage.app",
    messagingSenderId: "35091298840",
    appId: "1:35091298840:web:9d1d39a0570b7c257aa16d",
    measurementId: "G-2PDHRXVR6M"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
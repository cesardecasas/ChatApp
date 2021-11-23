// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHEqWmzcByOQH_o9NRdeMnm0z0pTfcb_A",
  authDomain: "chatapp-48795.firebaseapp.com",
  projectId: "chatapp-48795",
  storageBucket: "chatapp-48795.appspot.com",
  messagingSenderId: "1088622672021",
  appId: "1:1088622672021:web:56716fb2e2c9cf4839039c",
  measurementId: "G-D7EF7ZYD9S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import {useEffect, useState} from 'react'
import socket from '../components/socket';
import axios from 'axios';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken } from 'firebase/messaging'



function MyApp({ Component, pageProps }) {
  const [authenticated, setAuthenticated] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const client = axios.create({baseURL:'http://localhost:3001'})

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

  const messaging = getMessaging(app);
getToken(messaging, { vapidKey: 'BPwPwhN1158VWK_I13LR8bWD9eNRO-Cic8mg1kJHEzs0pxOsxjm9oCDKraZzuKaSuunZw406ZTzBn1NkRhhWtUU' }).then((currentToken) => {
  if (currentToken) {
    // Send the token to your server and update the UI if necessary
    // ...
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
});



  useEffect(()=>{
  })

  return <Component setAuthenticated={setAuthenticated} setCurrentUser={setCurrentUser} currentUser={currentUser} authenticated={authenticated} {...pageProps} />
}

export default MyApp

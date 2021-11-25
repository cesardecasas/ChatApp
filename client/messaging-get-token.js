import { getMessaging, getToken } from "firebase/messaging";

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.

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
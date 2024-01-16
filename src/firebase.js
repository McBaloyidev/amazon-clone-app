import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAKtxV0bNJqRxaedvc9l9pMPOtymWtyUaM",
    authDomain: "clone-72220.firebaseapp.com",
    projectId: "clone-72220",
    storageBucket: "clone-72220.appspot.com",
    messagingSenderId: "102925842855",
    appId: "1:102925842855:web:767ded5fc9bcce5b6fde82",
    measurementId: "G-639V8MXKWC"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth()

  export{db, auth};
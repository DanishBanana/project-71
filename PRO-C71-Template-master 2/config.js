import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyBWqmfx3RvKTIX_7A86nTmcz6zMWsRX2AU",
    authDomain: "e-ride-68b63.firebaseapp.com",
    projectId: "e-ride-68b63",
    storageBucket: "e-ride-68b63.appspot.com",
    messagingSenderId: "1050259491756",
    appId: "1:1050259491756:web:88a4a1d51410069c59c809",
    measurementId: "G-QPCB9HRCD0"
  };
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

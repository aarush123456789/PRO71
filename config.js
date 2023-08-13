import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyBKhbh7HVfSnU3NA9BGibMyJDA-hEwOFcM",
    authDomain: "e-ride-e38e5.firebaseapp.com",
    projectId: "e-ride-e38e5",
    storageBucket: "e-ride-e38e5.appspot.com",
    messagingSenderId: "1006975119056",
    appId: "1:1006975119056:web:31e6edd2e226a43ad238d5",
    measurementId: "G-DJQ5HJJ8P4"
  };
  
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

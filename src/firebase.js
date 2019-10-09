import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBejCRgCPGF1DB9IQY8C57rVhuHg7iYyPg",
    authDomain: "codevisualizer-8a5e1.firebaseapp.com",
    databaseURL: "https://codevisualizer-8a5e1.firebaseio.com",
    projectId: "codevisualizer-8a5e1",
    storageBucket: "",
    messagingSenderId: "44559081454",
    appId: "1:44559081454:web:4881fa4d0d5fa5b90f78ff",
    measurementId: "G-RKLBGDPPDK"
  };

  firebase.initializeApp(firebaseConfig);

  export const firestore = firebase.firestore();

  export default firebase;
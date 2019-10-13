import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

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

export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithRedirect(provider);
export const signOut = () => auth.signOut();



export const createUserProfileDocument = async (user, aditionalData) => {
  if (!user) return;

  //Get a reference to the place in the database where a user profile might be
  const userRef = firestore.doc(`users/${user.uid}`);

  // Go and fetch the documentfrom that location 
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        photoURL,
        email,
        ...aditionalData
      })

    } catch (err) {
      console.error('Error creating user', err.mesage);
    }
  }
  return getUserDocument(user.uid)
}

 
export const getUserDocument = async (uid) => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();
    return { uid, ...userDocument };
  } catch (err) {
    console.error('Error feching user', err.mesage);
  }
}
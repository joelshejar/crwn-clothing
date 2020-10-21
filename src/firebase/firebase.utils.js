import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCO0uO1JdUbol_btsmm1-1lfj0JLn1w1hE",
  authDomain: "crwn-db-7e2c0.firebaseapp.com",
  databaseURL: "https://crwn-db-7e2c0.firebaseio.com",
  projectId: "crwn-db-7e2c0",
  storageBucket: "crwn-db-7e2c0.appspot.com",
  messagingSenderId: "1027229713206",
  appId: "1:1027229713206:web:10ea38f86cc5d7a2046997",
  measurementId: "G-7027S6YZFE"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyChrAOZvrzO-f3EBr-sYYgsHNFrXrV0U58",
    authDomain: "crwn-db-ea2e5.firebaseapp.com",
    databaseURL: "https://crwn-db-ea2e5.firebaseio.com",
    projectId: "crwn-db-ea2e5",
    storageBucket: "crwn-db-ea2e5.appspot.com",
    messagingSenderId: "378158444443",
    appId: "1:378158444443:web:5a3aa9dc5e082f1023bb3e",
    measurementId: "G-KVH7SXREQN"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
        ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
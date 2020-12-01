import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAdReZykPdpirFGhNXyreAtGXtKUktVmQ8",
  authDomain: "mimercadolibre-8bd04.firebaseapp.com",
  databaseURL: "https://mimercadolibre-8bd04.firebaseio.com",
  projectId: "mimercadolibre-8bd04",
  storageBucket: "mimercadolibre-8bd04.appspot.com",
  messagingSenderId: "417048113957",
  appId: "1:417048113957:web:626ec60d5510cb8c6ce0cc",
};

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
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

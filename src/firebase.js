import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDUiQSC_Nxr2iikTAF9pIazeNEwF17EvaI",
  authDomain: "clone-43db3.firebaseapp.com",
  databaseURL: "https://clone-43db3.firebaseio.com",
  projectId: "clone-43db3",
  storageBucket: "clone-43db3.appspot.com",
  messagingSenderId: "221970299331",
  appId: "1:221970299331:web:e21470474e4db67016e576",
  measurementId: "G-CFV66GB1R8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };

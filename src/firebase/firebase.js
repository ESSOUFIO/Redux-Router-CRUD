import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmjx12JYF7WSSHr_v9GCS0HMMBDiss-98",
  authDomain: "redux-router-crud.firebaseapp.com",
  projectId: "redux-router-crud",
  storageBucket: "redux-router-crud.appspot.com",
  messagingSenderId: "7521705792",
  appId: "1:7521705792:web:54ae70ec65646fabe564a5",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();

import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_SECRET_KEY,
  authDomain: "kisajno-e43f0.firebaseapp.com",
  databaseURL: "https://kisajno-e43f0.firebaseio.com",
  projectId: "kisajno-e43f0",
  storageBucket: "kisajno-e43f0.appspot.com",
  messagingSenderId: "409085797847",
  appId: "1:409085797847:web:49613a135604bfbd01d792"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const database = firebaseApp.firestore();

export default firebase;

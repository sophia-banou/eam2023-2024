import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA2izFCoFTsVcssc5xw2_tIDIDqRbdf8Pc",
    authDomain: "eamproject-4e149.firebaseapp.com",
    projectId: "eamproject-4e149",
    storageBucket: "eamproject-4e149.appspot.com",
    messagingSenderId: "393516482048",
    appId: "1:393516482048:web:0d947ec590e8b9da6822e5",
    measurementId: "G-169S74HXJZ"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export { auth, db };
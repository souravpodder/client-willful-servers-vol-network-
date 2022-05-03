// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzywQPlRnBJH-ZdvZUij0iE4KZc39W8Ak",
  authDomain: "volunteer-network-e9024.firebaseapp.com",
  projectId: "volunteer-network-e9024",
  storageBucket: "volunteer-network-e9024.appspot.com",
  messagingSenderId: "25475266122",
  appId: "1:25475266122:web:f16e3187ef87817123d8b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

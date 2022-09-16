// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqxPbwcljbYyznHNPpPuT2TioGIiiURdE",
  authDomain: "rent-my-place.firebaseapp.com",
  projectId: "rent-my-place",
  storageBucket: "rent-my-place.appspot.com",
  messagingSenderId: "323789075882",
  appId: "1:323789075882:web:6ca61bec5d06a22eb9e7d3",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDblsCZX4exqQ9sN0PK-7jz-OtsNIFY4Ic",
  authDomain: "whatsapp-clone-c8369.firebaseapp.com",
  projectId: "whatsapp-clone-c8369",
  storageBucket: "whatsapp-clone-c8369.appspot.com",
  messagingSenderId: "1060486449878",
  appId: "1:1060486449878:web:dd03a30014fa14fde71777",
  measurementId: "G-E0WJV79DJ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
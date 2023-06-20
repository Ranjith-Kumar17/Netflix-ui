import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCVvnWkoQuNwHaaoGaoEpNMMNa2Tagy3F0",
  authDomain: "netflix-clone-63f65.firebaseapp.com",
  projectId: "netflix-clone-63f65",
  storageBucket: "netflix-clone-63f65.appspot.com",
  messagingSenderId: "1017393272302",
  appId: "1:1017393272302:web:6c9e5a89c7244e1411aaff",
  measurementId: "G-5M3L2Z5N1Z"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);

import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCd7EoiolLp9tihzIWqCACGcvc6TGjX1MY",
  authDomain: "interview-practice-66a2c.firebaseapp.com",
  projectId: "interview-practice-66a2c",
  storageBucket: "interview-practice-66a2c.appspot.com",
  messagingSenderId: "456070519470",
  appId: "1:456070519470:web:ba7b7b1cb6ac05fd32eb3f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

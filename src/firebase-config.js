import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
/*

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: "G-TWZMD6FQPD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//const analytics = getAnalytics(app);

export const db = getFirestore();
*/
const firebaseConfig = {
  apiKey: "AIzaSyBdZKzShTBNxphB2MVQ210yovfzkl8sH4k",
  authDomain: "crud-react-firebase-a4e05.firebaseapp.com",
  projectId: "crud-react-firebase-a4e05",
  storageBucket: "crud-react-firebase-a4e05.appspot.com",
  messagingSenderId: "989094807574",
  appId: "1:989094807574:web:9dcef8f13c0f5c0bb98d37",
  measurementId: "G-TWZMD6FQPD",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();

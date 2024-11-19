// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLPdJ75flUX_beiFrnxFpW2DeS836yOHs",
  authDomain: "empw-react.firebaseapp.com",
  projectId: "empw-react",
  storageBucket: "empw-react.firebasestorage.app",
  messagingSenderId: "679166344039",
  appId: "1:679166344039:web:c495c4a67a793d794f0dc2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
export { auth, db };

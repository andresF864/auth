// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxHCoISbt0soxHwK9w2Ui6M6HohdZPic0",
  authDomain: "ejemplo-cd7e3.firebaseapp.com",
  projectId: "ejemplo-cd7e3",
  storageBucket: "ejemplo-cd7e3.appspot.com",
  messagingSenderId: "142631149018",
  appId: "1:142631149018:web:8f1ee585802c9f2fe334e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export {auth}
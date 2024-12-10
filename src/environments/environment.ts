// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const environment = { production: false, 
  firebaseConfig : {
  apiKey: "AIzaSyAsXZ24GEV7TfkYz_yT-SdiHxpSBAH-eoA",
  authDomain: "proyect2-daf7b.firebaseapp.com",
  projectId: "proyect2-daf7b",
  storageBucket: "proyect2-daf7b.appspot.com",
  messagingSenderId: "785190194341",
  appId: "1:785190194341:web:ed52eb67a6366175b6d14c",
  measurementId: "G-KGM9MR81VF"
}};

// Initialize Firebase
const app = initializeApp(environment.firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
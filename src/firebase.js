// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5UXYhw9rvGQ5xOnof-HCW-dEl-gzPqgo",
  authDomain: "studypal-1b44d.firebaseapp.com",
  projectId: "studypal-1b44d",
  storageBucket: "studypal-1b44d.appspot.com",
  messagingSenderId: "833980021941",
  appId: "1:833980021941:web:5e260b9e4816627a86d2fc",
  measurementId: "G-FVFE8TXBL0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth=getAuth(app);
export default auth;
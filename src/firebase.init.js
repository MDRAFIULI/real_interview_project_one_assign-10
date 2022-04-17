// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCHe5L-bshQe9XlgJI-YXasFdfDIM-7xGc",
    authDomain: "assignment-ten-de78c.firebaseapp.com",
    projectId: "assignment-ten-de78c",
    storageBucket: "assignment-ten-de78c.appspot.com",
    messagingSenderId: "593840297865",
    appId: "1:593840297865:web:e0753c31cf85f926417358"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
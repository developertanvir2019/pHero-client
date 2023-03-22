// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD8yEebrn5qjVAiXPej7VFY6AIlSW0ARfc",
    authDomain: "pherotask.firebaseapp.com",
    projectId: "pherotask",
    storageBucket: "pherotask.appspot.com",
    messagingSenderId: "524392411788",
    appId: "1:524392411788:web:75cd0bd9cec99423f501a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
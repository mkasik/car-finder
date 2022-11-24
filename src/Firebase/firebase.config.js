// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAEAPAg7mmiRmqYSRgBvXcgTfp2h-Yxh-4",
    authDomain: "car-finder-bdc9d.firebaseapp.com",
    projectId: "car-finder-bdc9d",
    storageBucket: "car-finder-bdc9d.appspot.com",
    messagingSenderId: "1098676018353",
    appId: "1:1098676018353:web:a65e6fa72d4c422ab25690"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
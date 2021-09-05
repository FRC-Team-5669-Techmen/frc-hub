// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAFcG2KqRHYAQllx9MaYH0e6RV2Nan8s7k",
    authDomain: "frc-team-hub.firebaseapp.com",
    projectId: "frc-team-hub",
    storageBucket: "frc-team-hub.appspot.com",
    messagingSenderId: "330090286465",
    appId: "1:330090286465:web:76081602fe9cddabfdec80"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
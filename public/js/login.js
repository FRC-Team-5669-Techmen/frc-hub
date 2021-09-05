// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js";

import { initAuth, googleSignIn, signOutUser, attemptSignIn, authState, initPersist } from "./auth/auth.js"
import { initFirestore, getCities } from "./firestore/firestore.js"

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

var isSignedIn = false
var userObj;

window.onload = function () {
    initFirestore(app)
    getCities()
    initAuth(app).then(() => {
        initPersist()
    })
}

document.getElementById("signOut").onclick = signOutUser
document.getElementById("signIn").onclick = signIn

function signIn() {
    attemptSignIn()
}

function initContent() {
    if(isSignedIn) {
        document.getElementById('signIn').classList.add("sign-in-hidden");
    }
}

export function authChangeHandler(signedIn, user) {
    if(signedIn) {
        console.log("signed in")
        signedIn = true
        userObj = user
    } else if (!signedIn) {
        console.log("signed out")
        signedIn = false
        userObj = null
    }
}
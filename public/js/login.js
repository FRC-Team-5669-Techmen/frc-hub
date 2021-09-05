import { initAuth, googleSignIn, signOutUser, attemptSignIn, authState, initPersist, setAuthStateHandler } from "./auth/auth.js"
import { initFirestore, getCities } from "./firestore/firestore.js"

import { app } from "./firebaseInit.js"


var isSignedIn = false
var userObj;

window.onload = function () {
    setAuthStateHandler(authChangeHandler).then(() => {
        initAuth(app).then(() => {
            initPersist()
            initContent()
        })
    })
    initFirestore(app)
    getCities()
}

document.getElementById("signOut").onclick = signOutUser
document.getElementById("signIn").onclick = signIn

function signIn() {
    attemptSignIn()
}

function initContent() {
    if (isSignedIn) {
        document.getElementById('signIn').classList.add("sign-in-hidden");
    }
}

export function authChangeHandler(signedIn, user) {
    if (signedIn) {
        console.log("signed in")
        signedIn = true
        userObj = user
    } else if (!signedIn) {
        console.log("signed out")
        signedIn = false
        userObj = null
    }
}
import { initAuth, attemptSignIn, signOutUser, initPersist, setAuthStateHandler } from "./auth/auth.js"
import { initFirestore, getCities, checkNewUserId, setupNewAccount } from "./firestore/firestore.js"

import { app } from "./firebaseInit.js"


var isSignedIn = false
var userObj;
var userId;

window.onload = function () {
    setAuthStateHandler(authChangeHandler).then(() => {
        initAuth(app).then(() => {
            initPersist().then(() => {
                initContent()
            })
        })
    })
    initFirestore(app)
    getCities()
}

document.getElementById("signIn").onclick = attemptSignIn


function initContent() {
}

export async function authChangeHandler(signedIn, user) {
    if (signedIn) {
        //if (user.email.endsWith("boscotech.net")) {
        console.log("signed in")
        window.location.href = "/"
        isSignedIn = true
        userObj = user
        userId = (user.email.split("@")[0].replace(".", "-"))
        var userExists = await checkNewUserId(userId)
        if(!userExists) isNewAccount()
        //} else {
        //    console.warn("email is not of the correct organization. please use an email from the official bosco tech organization")
        //    signOutUser()
        //}
    } else if (!signedIn) {
        console.log("signed out")
        isSignedIn = false
        userObj = null
    }
}

function isNewAccount() {
    console.log("this is a new account")
    setupNewAccount(userId, userObj)
}
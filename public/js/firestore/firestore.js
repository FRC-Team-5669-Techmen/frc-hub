import { getFirestore, collection, getDocs, addDoc } from 'https://www.gstatic.com/firebasejs/9.0.1/firebase-firestore-lite.js';
import * as app from "../main.js"

const db = getFirestore(app);

export async function getCities() {
    try {
        const docRef = await addDoc(collection(db, "users"), {
            first: "Ada",
            last: "Lovelace",
            born: 1815
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }

}
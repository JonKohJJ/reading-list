// FIREBASE 9 SYNTAX

// just importing the functions we need 
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAZTi-d_LE9BeBoCpU7bGJQN8iNPqgVqZA",
    authDomain: "readinglistapp-1bd12.firebaseapp.com",
    projectId: "readinglistapp-1bd12",
    storageBucket: "readinglistapp-1bd12.appspot.com",
    messagingSenderId: "245256198386",
    appId: "1:245256198386:web:908b072e93e3c6a569586b"
};

// init firebase
initializeApp(firebaseConfig)

// init firestore
const db = getFirestore()

// init firebase auth
const auth = getAuth()

export { db, auth }


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAbwA7fsZthY1Rc1tYB9KGIrXp5kiZSHZA",
    authDomain: "motorbike-fragments-salsadsid.firebaseapp.com",
    projectId: "motorbike-fragments-salsadsid",
    storageBucket: "motorbike-fragments-salsadsid.appspot.com",
    messagingSenderId: "943290075698",
    appId: "1:943290075698:web:5927375e8ce70a17b1ca2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default (auth);
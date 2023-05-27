// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
const firebaseConfig = {
	apiKey: "AIzaSyA4gsxNgtNQgxw2kt-WO--F3oNcxceabJU",
	authDomain: "calc-meow-6236c.firebaseapp.com",
	projectId: "calc-meow-6236c",
	storageBucket: "calc-meow-6236c.appspot.com",
	messagingSenderId: "789430263194",
	appId: "1:789430263194:web:e52d5f6b323a57e7392e23",
	measurementId: "G-8LRL7KRVEC",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

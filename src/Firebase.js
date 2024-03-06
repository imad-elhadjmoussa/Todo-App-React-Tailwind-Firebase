import {getFirestore} from '@firebase/firestore'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDxpwHxutXvD1IMW5ZSN4fVjuqkKuIR4cA",
    authDomain: "fir-toutarils.firebaseapp.com",
    projectId: "fir-toutarils",
    storageBucket: "fir-toutarils.appspot.com",
    messagingSenderId: "288795215068",
    appId: "1:288795215068:web:339f29ccbd208981992019",
    measurementId: "G-6K2Y8900T4"
};

const app=initializeApp(firebaseConfig);
export const db=getFirestore(app);




import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// import * as firebase from "firebase";
// import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCz8568zss43wYWyKAIr8EAywOIFPXlaoQ",
    authDomain: "cart-de680.firebaseapp.com",
    projectId: "cart-de680",
    storageBucket: "cart-de680.appspot.com",
    messagingSenderId: "32296136226",
    appId: "1:32296136226:web:035332f39047098bb1a47b"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);
export const db = getFirestore(app);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);  


// serviceWorker.unregister();

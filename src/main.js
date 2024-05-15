import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAhRLygRt91qOt80yxVZY2PafOckWzjoY",
  authDomain: "calculator-4a6f7.firebaseapp.com",
  projectId: "calculator-4a6f7",
  storageBucket: "calculator-4a6f7.appspot.com",
  messagingSenderId: "478689184633",
  appId: "1:478689184633:web:37280d8f3261b36b063da8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

createApp(App).mount('#app')

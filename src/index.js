import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';

// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDMrsx7OJtSWXp8LAqM9o_RpSJWbrzb-dM",
  authDomain: "ipod-react-61def.firebaseapp.com",
  projectId: "ipod-react-61def",
  storageBucket: "ipod-react-61def.appspot.com",
  messagingSenderId: "864903107253",
  appId: "1:864903107253:web:4debe014eabbf6f16f64fc"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
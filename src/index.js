import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDIcQpoC2w6ROKKjvIm-jlQSDbDVmwV_pM",
  authDomain: "proyectofinalreact-fmusic.firebaseapp.com",
  projectId: "proyectofinalreact-fmusic",
  storageBucket: "proyectofinalreact-fmusic.appspot.com",
  messagingSenderId: "716844431046",
  appId: "1:716844431046:web:b8112aafc08d3d3ebb89c7"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

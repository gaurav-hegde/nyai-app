import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import firebase from "firebase/app";

firebase.initializeApp({
  apiKey: "AIzaSyAW7Le8Z4S9CDMuQlsQ9qWFa0F50SZDhqs",
  authDomain: "nyai-fc749.firebaseapp.com",
  projectId: "nyai-fc749",
  storageBucket: "nyai-fc749.appspot.com",
  messagingSenderId: "729652119854",
  appId: "1:729652119854:web:18efc648080ad7169a92bf",
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import logo from "./logo.svg";
import "./App.css";
import React from "react";
import firebase from "firebase";
import Login from "./pages/login";

function App() {
  const firebaseApp = firebase.apps[0];
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;

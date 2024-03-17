import logo from "./logo.svg";
import "./App.css";
import React from "react";
import firebase from "firebase";

function App() {
  const firebaseApp = firebase.apps[0];
  return (
    <div className="App">
      <code>
        <pre>{JSON.stringify(firebaseApp.options, null, 2)}</pre>
      </code>
    </div>
  );
}

export default App;

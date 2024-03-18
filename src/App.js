import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";

import Landing from "./pages/Landing";
import Form from "./pages/Form";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Landing />}></Route>
        <Route path="victimform" element={<Form />}></Route>
        <Route path="login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;

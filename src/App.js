import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";

import Form from "./pages/Form";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="victimform" element={<Form />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="dashboard" element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
}

export default App;

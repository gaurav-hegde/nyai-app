import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";

import Landing from "./pages/Landing";
import Form from "./pages/Form";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ReceiverForm from "./pages/ReceiverForm";
import Display from "./pages/Display";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Landing />}></Route>
        <Route path="victimform" element={<Form />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="dashboard" element={<Dashboard />}></Route>
        <Route path="cases/:case_id" element={<ReceiverForm />}></Route>
        <Route path="display" element={<Display />}></Route>
      </Routes>
    </div>
  );
}

export default App;

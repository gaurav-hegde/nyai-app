import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";

import Form from "./pages/Form";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="victimform" element={<Form />}></Route>
      </Routes>
    </div>
  );
}

export default App;

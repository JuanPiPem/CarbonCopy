import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

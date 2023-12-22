import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import ConfirmEmail from "./components/ConfirmEmail";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/confirm-email/:token" element={<ConfirmEmail />} />
      </Routes>
    </div>
  );
}

export default App;

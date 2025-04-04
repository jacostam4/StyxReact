import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderC from "./components/HeaderC";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./components/Register";

function App() {
  return (
     <Router>
      <HeaderC />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>  
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderC from "./components/HeaderC";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
     <Router>
      <HeaderC />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>  
  );
}

export default App;

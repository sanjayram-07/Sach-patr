import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Hero />
      <Features />

      <Routes>
        <Route path="/institute-demo" element={<div>Institute Demo Page</div>} />
        <Route path="/user-demo" element={<div>User Demo Page</div>} />
        <Route path="/hed-demo" element={<div>HED Demo Page</div>} />
        <Route path="/login" element={<div>Login Page</div>} />
        <Route path="/signup" element={<div>Signup Page</div>} />
      </Routes>
    </Router>
  );
};

export default App;

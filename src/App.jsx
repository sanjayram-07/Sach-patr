import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import InstituteDemo from "./pages/InstituteDemo";
import UserDemo from "./pages/UserDemo"; 
import HedDemo from "./pages/HedDemo";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Upload from "./pages/Upload";
import Alert from "./pages/Alert";

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/institute-demo" element={<InstituteDemo />} />
          <Route path="/user-demo/*" element={<UserDemo />} /> 
          <Route path="/hed-demo/*" element={<HedDemo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/institute-demo/dashboard" element={<Dashboard />} />
          <Route path="/institute-demo/upload" element={<Upload />} />
          <Route path="/institute-demo/alert" element={<Alert />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

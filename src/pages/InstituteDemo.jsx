import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "../App.css";
import Sidebar from "../components/Sidebar";
import UserNavbar from "../components/UserNavbar"; 


function Dashboard() {
  return <h2>Dashboard Page</h2>;
}
function UploadFiles() {
  return <h2>Upload Files Page</h2>;
}
function Alert() {
  return <h2>Alerts Page</h2>;
}

function InstituteDemo() {
  return (
    <div className="layouts">
      
      <Sidebar />

      
      <div className="mains">
      
        <UserNavbar />

       
        <main className="contents">
          <Routes>
          
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="upload" element={<UploadFiles />} />
            <Route path="alert" element={<Alert/>} />
            <Route path="*" element={<Navigate to="upload" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default InstituteDemo;

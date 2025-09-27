import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "../components/Footer";
import HedBar from "../components/HedBar";
import AdminSide from "../components/AdminSide";


import HedDashboard from "../pages/HedDashboard";
import BlockList from "../pages/BlockList";
import HedAlert from "../pages/HedAlert";

const HedDemo = () => {
  return (
    <div className="layouts">
      
      <AdminSide />

      
      <div className="mains">
        
        <HedBar />

        <main className="contents">
          <Routes>
            <Route path="hed-dashboard" element={<HedDashboard />} />
            <Route path="block-list" element={<BlockList />} />
            <Route path="hed-alert" element={<HedAlert />} />

          
            <Route path="*" element={<Navigate to="hed-dashboard" replace />} />
          </Routes>
        </main>

        
     
      </div>
    </div>
  );
};

export default HedDemo;

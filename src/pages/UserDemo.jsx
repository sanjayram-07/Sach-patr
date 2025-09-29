
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboards from "./Dashboards";
import UploadList from "./UploadList";

const UserDemo = () => {
  return (
    <Routes>

      <Route index element={<Navigate to="dashboards" replace />} />

      <Route path="dashboards" element={<Dashboards />} />
      <Route path="uploadlist" element={<UploadList />} />

    
      <Route path="*" element={<Navigate to="dashboards" replace />} />
    </Routes>
  );
};

export default UserDemo;

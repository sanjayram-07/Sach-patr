import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

function Sidebar() {
  return (
    <aside className="sidebars">
      <div className="sidebar-headers">Sach-Patr</div>
      <nav className="sidebar-links">
        <NavLink 
          to="/institute-demo/dashboard" 
          className={({ isActive }) => isActive ? "active-link" : ""}
        >
          Dashboard
        </NavLink>
        <NavLink 
          to="/institute-demo/upload" 
          className={({ isActive }) => isActive ? "active-link" : ""}
        >
          Upload Files
        </NavLink>
        <NavLink 
          to="/institute-demo/alert" 
          className={({ isActive }) => isActive ? "active-link" : ""}
        >
          Alerts 
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;

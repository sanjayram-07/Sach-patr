import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

function Sidebar() {
  return (
    <aside className="sidebars">
      <div className="sidebar-headers">Sach-Patr</div>
      <nav className="sidebar-links">
        <NavLink 
          to="/user-demo/dashboards" 
          className={({ isActive }) => isActive ? "active-link" : ""}
        >
          Dashboards
        </NavLink>
        <NavLink 
          to="/user-demo/uploadlist" 
          className={({ isActive }) => isActive ? "active-link" : ""}
        >
          Uploads
        </NavLink>
      
      </nav>
    </aside>
  );
}

export default Sidebar;

import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Sidebar() {
  return (
    <aside className="sidebars">
      <div className="sidebar-headers">Sach-Patr</div>
      <nav className="sidebar-links">
      <Link to="/hed-demo/hed-dashboard">Dashboard</Link>
      <Link to="/hed-demo/block-list">Block List</Link>
      <Link to="/hed-demo/hed-alert">Alerts</Link>
      </nav>
    </aside>
  );
}

export default Sidebar;

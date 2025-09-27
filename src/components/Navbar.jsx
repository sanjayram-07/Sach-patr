import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo" onClick={() => navigate("/")}>SachPatr</div>
        <div className="nav-links">
          <Link to="/Home"></Link>
          <Link to="/institute-demo"></Link>
          <Link to="/user-demo"></Link>
          <Link to="/hed-demo"></Link>
          <button className="btn ghost" onClick={() => navigate("/login")}>Log in</button>
          <button className="btn primary" onClick={() => navigate("/signup")}>Sign up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">SachPatr</div>

        <div className="nav-right">
          <Link className="nav-link" to="/institute-demo">Institute Demo</Link>
          <Link className="nav-link" to="/user-demo">User Demo</Link>
          <Link className="nav-link" to="/hed-demo">HED Demo</Link>

          <button className="btn btn-ghost" onClick={() => navigate("/login")}>
            Log in
          </button>
          <button className="btn btn-primary" onClick={() => navigate("/signup")}>
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

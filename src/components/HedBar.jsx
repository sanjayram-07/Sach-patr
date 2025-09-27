import React, { useState } from "react";
import "../App.css";
import userImg from "../assets/user.png"; 

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    
    <header className="navbars">
      <div className="navbar-titles">Admin</div>
      <div className="user-menus">
        <button
          className="user-avatars"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src={userImg} alt="User" />
        </button>
        {isOpen && (
          <div className="dropdowns">
            <a href="#">My Profile</a>
            <a href="/Home">Logout</a>
            <a href="/Home">Sach-patr</a>
          </div>
        )}
      </div>
    </header>
    
  );
}

export default Navbar;

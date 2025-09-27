import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../App.css";

const Signup = () => {
  const navigate = useNavigate();
  const [signupType, setSignupType] = useState("user");
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, password, role, signupType });

    if (signupType === "user") navigate("/user-dashboard");
    else if (signupType === "institute") navigate("/institute-dashboard");
  };


  const nameLabel = signupType === "user" ? "Full Name" : "Institute Name";
  const emailLabel = signupType === "user" ? "Email" : "Institute Email";

  return (
    <>
    <Navbar/>
    <div className="form-containers">
      <div className="login-cards">
        <h2 className="brands">SACH-PATR</h2>
        <p className="subtitles">Create your account</p>

        
        <div className="signup-type">
          {["user", "institute"].map((type) => (
            <button
              key={type}
              type="button"
              className={`type-btn ${signupType === type ? "active" : ""}`}
              onClick={() => setSignupType(type)}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
      
          <div className="input-groups">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder=" "
              required
            />
            <label>{nameLabel}</label>
          </div>

         
          <div className="input-groups">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=" "
              required
            />
            <label>{emailLabel}</label>
          </div>

         
          <div className="input-groups">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder=" "
              required
            />
            <label>Password</label>
          </div>

        
          {signupType === "user" && (
            <div className="input-groups">
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select Role
                </option>
                <option value="educator">Educator</option>
                <option value="student">Recruiter</option>
                <option value="other">Other</option>
              </select>
              <label>Role</label>
            </div>
          )}

          <button className="btns primarys" type="submit">
            Sign Up
          </button>
        </form>

        <p className="registers">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
    </>
  );
};

export default Signup;

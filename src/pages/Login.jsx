import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import * as jwt_decode from "jwt-decode";
import FacebookLogin from "react-facebook-login";
import Navbar from "../components/Navbar";
import "../App.css";
import login_photo from "../assets/login_photo.png";

const Login = () => {
  const navigate = useNavigate();
  const [loginType, setLoginType] = useState("user"); 
  const [googleUser, setGoogleUser] = useState(null);
  const [facebookUser, setFacebookUser] = useState(null);

  const handleGoogleLogin = (response) => {
    try {
      const user = jwt_decode(response.credential);
      console.log("Google user info:", user);
      setGoogleUser(user);
      redirectAfterLogin();
    } catch (err) {
      console.error("Google login failed:", err);
    }
  };

  const handleFacebookLogin = (response) => {
    if (response.status === "unknown") {
      console.error("Facebook login failed");
      return;
    }
    console.log("Facebook user info:", response);
    setFacebookUser(response);
    redirectAfterLogin();
  };

  // Redirect based on login type
  const redirectAfterLogin = () => {
    switch (loginType) {
      case "user":
        navigate("/user-demo");
        break;
      case "institute":
        navigate("/institute-demo");
        break;
      case "admin":
        navigate("/hed-demo");
        break;
      default:
        navigate("/");
    }
  };

  return (
    <>
      <Navbar />
      <div className="login-wrapper">
        <div className="login-left">
          <img src={login_photo} alt="Login" />
        </div>

        <div className="login-right">
          <div className="login-card">
            <h2>
              <span className="brand">SACH-PATR</span>
            </h2>

            {/* Three login type buttons */}
            <div className="login-type">
              {["user", "institute", "admin"].map((type) => (
                <button
                  key={type}
                  type="button"
                  className={`type-btn ${loginType === type ? "active" : ""}`}
                  onClick={() => setLoginType(type)}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>

            <form onSubmit={(e) => { e.preventDefault(); redirectAfterLogin(); }}>
              <div className="input-group">
                <label>{loginType === "user" ? "Email or Username" : "Email"}</label>
                <input
                  type="email"
                  placeholder={
                    loginType === "user"
                      ? "Enter your email or username"
                      : "Enter your email"
                  }
                  required
                />
              </div>

              <div className="input-group">
                <label>Password</label>
                <input type="password" placeholder="Enter your password" required />
              </div>

              <div className="options">
                <label>
                  <input type="checkbox" /> Remember Me
                </label>
                <a href="#">Forgot Password?</a>
              </div>

              <button type="submit" className="btns primary">
                Sign In
              </button>

              {loginType === "user" && (
             <>
            <div className="divider"><span>or</span></div>

            <div className="social-row">
              <GoogleLogin
                onSuccess={handleGoogleLogin}
                onError={() => console.log("Google login failed")}
              
              />

            <FacebookLogin
              appId={import.meta.env.VITE_FACEBOOK_APP_ID}
              autoLoad={false}
              fields="name,email,picture"
              callback={handleFacebookLogin}
              textButton="Login with Facebook"
              cssClass="facebook-btn"
            />
          </div>

          {googleUser && (
            <div className="social-user-info">
              <img src={googleUser.picture} alt={googleUser.name} width="50" />
              <p>{googleUser.name}</p>
              <p>{googleUser.email}</p>
            </div>
          )}

      {facebookUser && (
        <div className="social-user-info">
          <img src={facebookUser.picture?.data.url} alt={facebookUser.name} width="50" />
          <p>{facebookUser.name}</p>
          <p>{facebookUser.email}</p>
        </div>
          )}
        </>
      )}

            </form>
            <div className="login-footer">
  {loginType === "user" ? (
    <p>
      Don’t have an account?{" "}
      <a href="/signup" className="footer-link">Sign Up</a>
    </p>
  ) : (
    <p>
      Already have an account?{" "}
      <a href="/login" className="footer-link">Sign In</a>
    </p>
  )}
</div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

import React from "react";
import { FaYoutube, FaFacebookF, FaLinkedinIn, FaTelegramPlane, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h2 className="footer-logo">SACH-PATR</h2>
          <p>
            Where Quality Meets Technology. Explore our curated range of
            premium tools and solutions designed for secure academic verification.
          </p>
          <div className="newsletter">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
          <div className="social-icons">
            <FaYoutube />
            <FaFacebookF />
            <FaLinkedinIn />
            <FaTelegramPlane />
            <FaInstagram />
          </div>
        </div>

        
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>123, Academic Street, Ranchi, Jharkhand</p>
          <p>Email: support@sachpatr.com</p>
          <p>Phone: +91 70000 00000</p>
          <p>Mon-Sun: 9:30am - 6:30pm</p>
        </div>

       
        <div className="footer-section company">
          <h3>Company</h3>
          <p>About Us</p>
          <p>Blogs</p>
          <p>Careers</p>
          <p>Contact</p>
        </div>

       
        <div className="footer-section help">
          <h3>Get Help</h3>
          <p>Payment FAQs</p>
          <p>Shipping Policy</p>
          <p>Return Policy</p>
          <p>Privacy Policy</p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} SACH-PATR. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

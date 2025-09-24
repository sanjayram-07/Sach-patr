import React from "react";
import "../App.css";

const FeatureCard = ({ title, description }) => (
  <div className="feature-card">
    <div className="feature-icon"></div>
    <div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  </div>
);

export default FeatureCard;

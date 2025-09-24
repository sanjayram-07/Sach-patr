import React from "react";
import FeatureCard from "./FeatureCard";
import "../App.css";

const Features = () => (
  <section className="features">
    <FeatureCard
      title="Auto Layout Recognition"
      description="Automatically detect and process layouts without manual effort."
    />
    <FeatureCard
      title="Format Handling"
      description="Supports multiple formats and adapts dynamically without reprogramming."
    />
    <FeatureCard
      title="Smart Analytics"
      description="Detect trends and suspicious patterns automatically with ML-powered insights."
    />
  </section>
);

export default Features;

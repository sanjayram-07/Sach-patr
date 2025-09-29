import React from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";
import "../App.css";

const ResultSummary = ({ data = [], file }) => {
  const COLORS = ["#4CAF50", "#4CAF50", "#F44336"]; 

  const passPoints = [
    "Text consistency verified",
    "Metadata matches issuer",
    "Logo/Seal integrity checked",
    "Digital signature confirmed",
  ];

  return (
    <div className="result-container">
      <h2>Certificate Verification</h2>

      <div className="top-section">
     
        <div className="donut-wrapper">
          <PieChart width={250} height={250}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>  
            <Legend />
          </PieChart>
        </div>

        
        <div className="file-details">
          <h3>File Details</h3>
          {file ? (
            <>
              <p><b>Name:</b> {file.name}</p>
              <p><b>Size:</b> {(file.size / 1024).toFixed(2)} KB</p>
            </>
          ) : (
            <p>No file uploaded</p>
          )}
        </div>
      </div>

   
      <div className="pass-consistency-card">
        <h3>Pass Consistency Points</h3>
        <ul>
          {passPoints.map((point, idx) => (
            <li key={idx}>
              <span className="verified-point">✔</span> {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResultSummary;

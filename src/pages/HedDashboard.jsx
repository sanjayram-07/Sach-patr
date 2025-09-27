import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";
import "../App.css";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const HedDashboard = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Forgery Trend",
        data: [3, 5, 2, 6, 4],
        borderColor: "#007bff",
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true, position: "top" },
    },
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.download = "forgery-trend.png";
    link.href = document.querySelector("canvas").toDataURL();
    link.click();
  };

  return (
    <div className="dashboard">
      <h1 className="page-title">Fake Degree Recognition Dashboard</h1>

      <div className="stats-grid">
        <div className="stat-card verified">
          <h3>Certificates Verified</h3>
          <p>12,345</p>
        </div>
        <div className="stat-card fake">
          <h3>Fake Certificates Detected</h3>
          <p>234</p>
        </div>
        <div className="stat-card alerts">
          <h3>Recent Alerts</h3>
          <p>15</p>
        </div>
      </div>

      <div className="chart-section">
        <h2>Forgery Trend Analysis</h2>
        <Line data={data} options={options} />
        <button className="btnss download-btn" onClick={handleDownload}>
          Download Graph
        </button>
      </div>
    </div>
  );
};

export default HedDashboard;

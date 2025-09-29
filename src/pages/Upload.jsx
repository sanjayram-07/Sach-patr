import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import UserNavbar from "../components/UserNavbar";
import { FiTrash2 } from "react-icons/fi";
import ResultSummary from "../components/DonutChart";
import "../App.css";

const Upload = () => {
  const [files, setFiles] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [certificateDetails, setCertificateDetails] = useState(null);

  const handleFiles = (selectedFiles) => {
    const uploadedFiles = Array.from(selectedFiles);
    setFiles((prev) => [...prev, ...uploadedFiles]);

    
    const data = [
      { name: "Pass", value: 25 },
      { name: "Valid", value: 25 },
      { name: "Suspicious", value: 25 },
      { name: "Verified", value: 25 },
    ];
    setChartData(data);


    setCertificateDetails({
      id: "CERT-10234",
      issuedTo: "John Doe",
      issuedBy: "XYZ University",
      date: "10 Sep 2023",
      status: "AUTHENTIC",
    });
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };

  const handleDragOver = (e) => e.preventDefault();

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
    setChartData([]);
    setCertificateDetails(null);
  };

  const resultShown = files.length > 0 && chartData.length > 0 && certificateDetails;

  return (
    <div className="layouts">
      <Sidebar />
      <div className="mains">
        <UserNavbar />
        <main className="contents">
          <div className="page-container">
            <header className="page-hero">
              <h1 className="page-title">Authenticator for Academic Certificates</h1>
              <p className="page-subtitle">Verification made easy and secure</p>
            </header>

          
            <div
              className="drop-zone"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              <p className="bulk-text"><strong>Bulk Certificates</strong></p>
              <p>Drag & Drop files here or click to upload</p>
              <input
                type="file"
                multiple
                onChange={(e) => handleFiles(e.target.files)}
                className="file-input"
              />
            </div>

         
            {files.length > 0 && (
              <div className="file-list">
                <ul>
                  {files.map((file, index) => (
                    <li key={index}>
                      <span>{file.name}</span>
                      <FiTrash2
                        className="trash-icon"
                        onClick={() => removeFile(index)}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            )}

          
            {resultShown && (
              <div
                className="results-wrapper"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "40px",
                  marginTop: "40px",
                  alignItems: "stretch",
                  maxWidth: "1000px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
            
                <div
                  className="result-summary-container"
                  style={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#fff",
                    borderRadius: "10px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                    padding: "20px",
                  }}
                >
                  <ResultSummary data={chartData} file={files[0]} />
                </div>

                
                <div
                  className="certificate-details-container"
                  style={{
                    background: "#fff",
                    padding: "30px",
                    borderRadius: "10px",
                    boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
                    minWidth: "300px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                    color: "#333",
                  }}
                >
                  <h3 style={{ marginBottom: "20px", color: "#1976d2", borderBottom: "2px solid #eee", paddingBottom: "8px" }}>
                    Certificate Details
                  </h3>

                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                    <span style={{ fontWeight: "600", color: "#555" }}>Certificate ID:</span>
                    <span style={{ fontWeight: "500", color: "#1976d2" }}>{certificateDetails.id}</span>
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                    <span style={{ fontWeight: "600", color: "#555" }}>Issued To:</span>
                    <span style={{ fontWeight: "500", color: "#1976d2" }}>{certificateDetails.issuedTo}</span>
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                    <span style={{ fontWeight: "600", color: "#555" }}>Issued By:</span>
                    <span style={{ fontWeight: "500", color: "#1976d2" }}>{certificateDetails.issuedBy}</span>
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                    <span style={{ fontWeight: "600", color: "#555" }}>Date of Issue:</span>
                    <span style={{ fontWeight: "500", color: "#1976d2" }}>{certificateDetails.date}</span>
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: "15px", paddingTop: "10px", borderTop: "1px solid #eee" }}>
                    <span style={{ fontWeight: "600", color: "#555" }}>Status:</span>
                    <span style={{ fontWeight: "600", color: certificateDetails.status === "AUTHENTIC" ? "#4CAF50" : "#F44336" }}>
                      {certificateDetails.status}
                    </span>
                  </div>
                </div>
              </div>
            )}

         
            {!resultShown && (
              <section className="feature-cards">
                <div className="card">
                  <h3>Auto Layout Recognition</h3>
                  <p>Automatically detect and process layouts without manual effort.</p>
                </div>
                <div className="card">
                  <h3>Format Handling</h3>
                  <p>Supports multiple formats and adapts dynamically without reprogramming.</p>
                </div>
                <div className="card">
                  <h3>Smart Analytics</h3>
                  <p>Detect trends and suspicious patterns automatically with ML-powered insights.</p>
                </div>
              </section>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Upload;

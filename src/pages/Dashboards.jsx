import React, { useState } from "react";
import Sidebar from "../components/Userside";
import UserNav from "../components/UserNav";
import Footer from "../components/Footer";
import ResultSummary from "../components/DonutChart";
import { FiTrash2 } from "react-icons/fi";
import "../App.css";


const Dashboards = () => {
  const [files, setFiles] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [certificateDetails, setCertificateDetails] = useState(null);

  const handleFiles = (selectedFiles) => {
    const uploadedFiles = Array.from(selectedFiles);
    setFiles((prevFiles) => [...prevFiles, ...uploadedFiles]);

   
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
    <>
      <div className="layouts">
        <Sidebar />
        <div className="mains">
          <UserNav />
          <main className="contents">
            <div className="page-container">
             
              {!resultShown && (
                <>
                  <header className="page-hero">
                    <h1 className="page-title">Authenticator for Academic Certificates</h1>
                    <p className="page-subtitle">Verification made easy and secure</p>
                  </header>

                  <div
                    className="drop-zone"
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                  >
                    <p>Drag & Drop files here or click to upload</p>
                    <input
                      type="file"
                      multiple
                      onChange={(e) => handleFiles(e.target.files)}
                      className="file-input"
                    />
                  </div>
                </>
              )}

          
              {!resultShown && files.length > 0 && (
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
                <div className="dashboard-results">
                  <div className="verification-cards-grid">
                    <div className="verify-card pass-card">
                      <h4>Text Consistency</h4>
                      <p>Pass</p>
                    </div>
                    <div className="verify-card valid-card">
                      <h4>Metadata Validation</h4>
                      <p>Valid</p>
                    </div>
                    <div className="verify-card suspicious-card">
                      <h4>Logo/Seal Match</h4>
                      <p>Suspicious</p>
                    </div>
                    <div className="verify-card verified-card">
                      <h4>Digital Signature</h4>
                      <p>Verified</p>
                    </div>
                  </div>

                  <div className="result-layout">
                    <div className="verification-overview">
                      <h2>Certificate Verification</h2>
                      <ResultSummary data={chartData} file={files[0]} />
                    </div>

                    <div className="certificate-details">
                      <h3>Certificate Details</h3>
                      <p><b>Certificate ID:</b> {certificateDetails.id}</p>
                      <p><b>Issued To:</b> {certificateDetails.issuedTo}</p>
                      <p><b>Issued By:</b> {certificateDetails.issuedBy}</p>
                      <p><b>Date of Issue:</b> {certificateDetails.date}</p>
                      <p><b>Status:</b> <span className="status">{certificateDetails.status}</span></p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboards;

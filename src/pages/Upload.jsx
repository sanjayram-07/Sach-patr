import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import UserNavbar from "../components/UserNavbar";
import { FiTrash2 } from "react-icons/fi";
import "../App.css";

const Upload = () => {
  const [files, setFiles] = useState([]);

  const handleFiles = (selectedFiles) => {
    setFiles((prevFiles) => [...prevFiles, ...Array.from(selectedFiles)]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleVerify = () => {
    alert(`Verifying ${files.length} file(s)...`);
  };

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
                <button className="btn verify-btn" onClick={handleVerify}>
                  Verify
                </button>
              </div>
            )}

            <section className="feature-cards">
              <div className="card">
                <h3>Auto Layout Recognition</h3>
                <p>
                  Automatically detect and process layouts without manual effort.
                </p>
              </div>
              <div className="card">
                <h3>Format Handling</h3>
                <p>
                  Supports multiple formats and adapts dynamically without
                  reprogramming.
                </p>
              </div>
              <div className="card">
                <h3>Smart Analytics</h3>
                <p>
                  Detect trends and suspicious patterns automatically with ML-powered
                  insights.
                </p>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Upload;

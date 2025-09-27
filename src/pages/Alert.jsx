import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import UserNavbar from "../components/UserNavbar";
import "../App.css";

const Alert = () => {
  const [emailNotification, setEmailNotification] = useState(true);
  const [smsNotification, setSmsNotification] = useState(false);

  const alertsData = [
    {
      type: "Duplicate Certificate",
      description: "A certificate was uploaded more than once",
      date: "2025-09-20",
    },
    {
      type: "Suspicious Upload",
      description: "Upload flagged for unusual pattern",
      date: "2025-09-21",
    },
    {
      type: "Unverified Certificate",
      description: "Certificate has not been verified yet",
      date: "2025-09-22",
    },
    {
      type: "Forgery Detected",
      description: "Certificate failed authenticity check",
      date: "2025-09-23",
    },
    {
      type: "Multiple Failed Uploads",
      description: "Several uploads failed consecutively",
      date: "2025-09-24",
    },
    {
      type: "System Notice",
      description: "System maintenance scheduled",
      date: "2025-09-25",
    },
    {
      type: "Unauthorized Alert Test",
      description: "Unauthorized activity detected",
      date: "2025-09-26",
    },
  ];

  return (
    <div className="layouts">
      
      <Sidebar />

      
      <div className="mains">
       
        <UserNavbar />

      
        <main className="contents">
          <h2>Institute Alerts</h2>

        
          <div className="alerts-cards">
            <div className="card notification-card">
              <label>
                <input
                  type="checkbox"
                  checked={emailNotification}
                  onChange={() => setEmailNotification(!emailNotification)}
                />{" "}
                Enable Email Notification
              </label>
            </div>
            <div className="card notification-card">
              <label>
                <input
                  type="checkbox"
                  checked={smsNotification}
                  onChange={() => setSmsNotification(!smsNotification)}
                />{" "}
                Enable SMS Notification
              </label>
            </div>
          </div>

          
          <div className="alerts-table">
            <table>
              <thead>
                <tr>
                  <th>Alert Type</th>
                  <th>Description</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {alertsData.map((alert, index) => (
                  <tr key={index}>
                    <td>{alert.type}</td>
                    <td>{alert.description}</td>
                    <td>{alert.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Alert;

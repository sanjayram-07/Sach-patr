import React from "react";
import "../App.css";

function HedAlert() {
  return (
    <div className="hedalert-container">
      <h2 className="hedalert-title">Alerts & Notifications</h2>

      
      <div className="hedalert-card hedalert-preferences">
        <h3>Notification Preferences</h3>
        <div className="hedalert-toggle">
          <label>
            <input type="checkbox" /> Enable Email Notifications
          </label>
        </div>
        <div className="hedalert-toggle">
          <label>
            <input type="checkbox" /> Enable SMS Notifications
          </label>
        </div>
      </div>

   
      <div className="hedalert-card">
        <h3>Recent Alerts</h3>
        <table className="hedalert-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Description</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Forgery</td>
              <td>Fake certificate upload attempt</td>
              <td>2025-09-27</td>
            </tr>
            <tr>
              <td>Duplicate</td>
              <td>Duplicate certificate from XYZ Institute</td>
              <td>2025-09-24</td>
            </tr>
            <tr>
              <td>Unauthorized</td>
              <td>Suspicious login attempt detected</td>
              <td>2025-09-22</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HedAlert;

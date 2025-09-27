import React from "react";
import "../App.css";
import Sidebar from "../components/Sidebar";
import UserNavbar from "../components/UserNavbar";
import Footer from "../components/Footer";

function Dashboard() {
  const summary = {
    total: 120,
    flagged: 8,
    verified: 112,
  };

  const recentUploads = [
    { id: "C-001", name: "Rahul Sharma", institute: "IIT Bombay", date: "2025-09-20", status: "Verified" },
    { id: "C-002", name: "Priya Verma", institute: "IIT Delhi", date: "2025-09-21", status: "Flagged" },
    { id: "C-003", name: "Amit Singh", institute: "NIT Trichy", date: "2025-09-23", status: "Verified" },
    { id: "C-004", name: "Sneha Kapoor", institute: "BITS Pilani", date: "2025-09-24", status: "Verified" },
    { id: "C-005", name: "Arjun Mehta", institute: "IIT Madras", date: "2025-09-25", status: "Flagged" },
  ];

  return (
    <>
    <div className="layouts">
      
      <Sidebar />

      
      <div className="mains">
        
        <UserNavbar />

       
        <main className="contents">
          
          <div className="dashboard">
            <div className="summary-cards">
              <div className="cards total">
                <h3>Total Certificates</h3>
                <p>{summary.total}</p>
              </div>
              <div className="cards flagged">
                <h3>Flagged Certificates</h3>
                <p>{summary.flagged}</p>
              </div>
              <div className="cards verified">
                <h3>Verified Certificates</h3>
                <p>{summary.verified}</p>
              </div>
            </div>

          
            <div className="recent-uploads">
              <h3>Recent Uploads</h3>
              <table>
                <thead>
                  <tr>
                    <th>Certificate ID</th>
                    <th>Name</th>
                    <th>Institute</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentUploads.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.institute}</td>
                      <td>{item.date}</td>
                      <td>
                        <span className={`status ${item.status.toLowerCase()}`}>
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>

        
      </div>
      
    </div>
    <Footer/>
  </>
  );
}

export default Dashboard;

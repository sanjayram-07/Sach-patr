import React from "react";
import Sidebar from "../components/Userside";
import UserNav from "../components/UserNav";
import Footer from "../components/Footer";
import "../App.css";

const dummyUploads = [
  { name: "report1.pdf", date: "2025-09-20", tampered: 20 },
  { name: "contract.docx", date: "2025-09-21", tampered: 65 },
  { name: "image.png", date: "2025-09-25", tampered: 5 },
  { name: "certificate1.pdf", date: "2025-09-22", tampered: 0 },
  { name: "certificate2.pdf", date: "2025-09-23", tampered: 10 },
  { name: "resume.docx", date: "2025-09-24", tampered: 2 },
  { name: "presentation.pptx", date: "2025-09-26", tampered: 50 },
  { name: "notes.txt", date: "2025-09-27", tampered: 0 },
  { name: "invoice.pdf", date: "2025-09-28", tampered: 5 },
  { name: "diagram.svg", date: "2025-09-29", tampered: 15 },
];


const UploadList = () => {
  return (
    <>
    <div className="layouts">
      <Sidebar />
      <div className="mains">
        <UserNav/>
        <main className="contents">
          <h2>Your Uploads</h2>
          <table className="upload-table">
            <thead>
              <tr>
                <th>File Name</th>
                <th>Date</th>
                <th>Tampered %</th>
              </tr>
            </thead>
            <tbody>
              {dummyUploads.map((u, i) => (
                <tr key={i}>
                  <td>{u.name}</td>
                  <td>{u.date}</td>
                  <td>{u.tampered}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
       
      </div>
    </div>
     <Footer />
     </>
  );
};

export default UploadList;

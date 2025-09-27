import React, { useState, useEffect } from "react";
import "../App.css";

function BlockList() {
  
  const initialList = [
    { id: "INST123", name: "ABC Institute", date: "2025-09-25", reason: "Forgery" },
    { id: "USR456", name: "John Doe", date: "2025-09-20", reason: "Multiple Fail Uploads" },
    { id: "INST789", name: "XYZ Institute", date: "2025-09-18", reason: "Suspicious Upload" }
  ];

  const [blocklist, setBlocklist] = useState(initialList);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredList, setFilteredList] = useState(initialList);


  const handleRemove = (index) => {
    const removedItem = filteredList[index];
    const newFiltered = filteredList.filter((_, i) => i !== index);
    setFilteredList(newFiltered);

  
    setBlocklist(blocklist.filter((item) => item.id !== removedItem.id));
  };

  
  const handleSearch = (e) => {
    e.preventDefault();
    const term = searchTerm.toLowerCase();
    if (term === "") {
      setFilteredList(blocklist); 
    } else {
      const filtered = blocklist.filter((item) =>
        item.name.toLowerCase().startsWith(term)
      );
      setFilteredList(filtered);
    }
  };


  useEffect(() => {
    if (searchTerm === "") {
      setFilteredList(blocklist);
    }
  }, [searchTerm, blocklist]);

  return (
    <div className="blocklist-container">
      <h2 className="blocklist-title">Block List</h2>

     
      <form className="blocklist-search" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for user/institute..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

     
      <div className="blocklist-card">
        <table className="blocklist-table">
          <thead>
            <tr>
              <th>User/Institute</th>
              <th>ID</th>
              <th>Date</th>
              <th>Reason</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredList.length > 0 ? (
              filteredList.map((item, index) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.id}</td>
                  <td>{item.date}</td>
                  <td>{item.reason}</td>
                  <td>
                    <button
                      className="blocklist-remove"
                      onClick={() => handleRemove(index)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" style={{ textAlign: "center", color: "#555" }}>
                  No matching results.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BlockList;

// src/components/Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-200 p-4">
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/personal-details">Personal Details</Link></li>
        <li><Link to="/contact-details">Contact Details</Link></li>
        <li><Link to="/educational-background">Educational Background</Link></li>
        <li><Link to="/results">Results</Link></li>
        <li><Link to="/program-choice">Program Choice</Link></li>
        <li><Link to="/upload-documents">Upload Documents</Link></li>
        <li><Link to="/referee">Referee</Link></li>
        <li><Link to="/declaration">Declaration</Link></li>
        <li><Link to="/submit">Submit Application</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;

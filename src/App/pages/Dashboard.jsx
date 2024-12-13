// src/pages/Dashboard.jsx
import React from "react";
import Sidebar from "../components/Sidebar";
import NavigationBar from "../components/NavigationBar";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <NavigationBar />
        <div className="p-4">
          <h2 className="text-xl">Welcome to the Online Application Form</h2>
          <p>Start by filling the details in each section.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

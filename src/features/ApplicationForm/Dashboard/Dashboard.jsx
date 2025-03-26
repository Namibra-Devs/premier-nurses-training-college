import React, { useState, useEffect } from "react";
import {applicationStatus, submittedApplications, admissionMaterials } from "./DasboardMaterials";
import {AiOutlineFileText, AiOutlineDownload, AiOutlineCheckCircle } from "react-icons/ai";
import { BsClipboardCheck } from "react-icons/bs";

const Dashboard = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Load program data on component mount
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100); // Trigger the animation
  }, []);

  return (
    <div
      className={`transform transition-transform duration-500 ${
        isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
      }`}
    >
      <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Application Status Section */}
        <div className="p-4 flex flex-col items-center justify-center bg-primary rounded shadow-custom-light">
          <h2 className="text-xl text-white font-semibold flex flex-col items-center gap-2">
            <BsClipboardCheck className="text-white text-3xl" />
            Application Status
          </h2>
          <p className="text-gold mt-2">
            {applicationStatus ? (
              <span className="bg-white px-4 py-2 rounded text-green-600 flex items-center gap-2">
                <AiOutlineCheckCircle /> {applicationStatus}
              </span>
            ) : (
              "No application submitted yet."
            )}
          </p>
        </div>

        {/* Submitted Applications Section */}
        <div className="p-4 bg-white flex flex-col items-center justify-center rounded border">
          <h2 className="text-xl text-center font-semibold flex flex-col items-center gap-">
            <AiOutlineFileText className="text-blue-500 text-3xl" />
            Submitted Applications
          </h2>
          {submittedApplications.length > 0 ? (
            <ul className="mt-4 space-y-2">
              {submittedApplications.map((app, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between bg-blue-100 px-4 py-2 rounded hover:shadow-custom-light transition"
                >
                  <span className="text-gray-800">{app.title}</span>
                  <button
                    onClick={() => app.onDownload()}
                    className="text-blue-500 flex items-center gap-2 hover:text-blue-700"
                  >
                    <AiOutlineDownload className="ml-3 text-lg" />
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-700 mt-2 text-center">
              No submitted applications available.
            </p>
          )}
        </div>

        {/* Admission Materials Section */}
        <div className="p-4 bg-white flex flex-col items-center justify-center rounded border overflow-hidden">
          <h2 className="text-xl text-center font-semibold flex flex-col items-center gap-2">
            <AiOutlineDownload className="text-blue-500 text-3xl" />
            Admission Materials
          </h2>
          {admissionMaterials.length > 0 ? (
            <ul className="mt-4 space-y-2">
              {admissionMaterials.map((material, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between bg-blue-100 px-4 py-2 rounded hover:shadow-custom-light transition"
                >
                  <span className="text-gray-800">{material.title}</span>
                  <button
                    onClick={() => material.onDownload()}
                    className="text-blue-500 flex items-center hover:text-blue-700"
                  >
                    <AiOutlineDownload className="ml-3 text-lg" />
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-700 mt-2 text-center">
              No admission materials available yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React from "react";
import { AiOutlineFileText, AiOutlineDownload, AiOutlineCheckCircle } from "react-icons/ai";
import { BsClipboardCheck } from "react-icons/bs";

const Dashboard = ({ applicationStatus, submittedApplications, admissionMaterials }) => {
  return (
    <div className="bg-gray-50 p-6 rounded shadow-lg">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {/* Application Status Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <BsClipboardCheck className="text-blue-500" />
          Application Status
        </h2>
        <p className="text-gray-700 mt-2">
          {applicationStatus ? (
            <span className="text-green-600 flex items-center gap-2">
              <AiOutlineCheckCircle /> {applicationStatus}
            </span>
          ) : (
            "No application submitted yet."
          )}
        </p>
      </div>

      {/* Submitted Applications Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <AiOutlineFileText className="text-blue-500" />
          Submitted Applications
        </h2>
        {submittedApplications.length > 0 ? (
          <ul className="mt-4 space-y-2">
            {submittedApplications.map((app, index) => (
              <li
                key={index}
                className="flex items-center justify-between bg-white p-4 rounded shadow hover:shadow-md transition"
              >
                <span className="text-gray-800">{app.title}</span>
                <button
                  onClick={() => app.onDownload()}
                  className="text-blue-500 flex items-center gap-2 hover:text-blue-700"
                >
                  <AiOutlineDownload /> Download
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-700 mt-2">No submitted applications available.</p>
        )}
      </div>

      {/* Admission Materials Section */}
      <div>
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <AiOutlineDownload className="text-blue-500" />
          Admission Materials
        </h2>
        {admissionMaterials.length > 0 ? (
          <ul className="mt-4 space-y-2">
            {admissionMaterials.map((material, index) => (
              <li
                key={index}
                className="flex items-center justify-between bg-white p-4 rounded shadow hover:shadow-md transition"
              >
                <span className="text-gray-800">{material.title}</span>
                <button
                  onClick={() => material.onDownload()}
                  className="text-blue-500 flex items-center gap-2 hover:text-blue-700"
                >
                  <AiOutlineDownload /> Download
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-700 mt-2">No admission materials available yet.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

import React, { useState, useEffect } from "react";
import {
  AiOutlineFilePdf,
  AiOutlineIdcard,
  AiOutlineUser,
  AiOutlineUpload,
} from "react-icons/ai";
import SaveButton from "./Buttons/SaveButton";

const UploadDocuments = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Load program data on component mount
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100); // Trigger the animation
  }, []);

  const [referee, setReferee] = useState({
    name: "",
    address: "",
    contact: "",
    letter: null,
  });
  const [idType, setIdType] = useState("");
  const [idFile, setIdFile] = useState(null);
  const [academicFile, setAcademicFile] = useState(null);

  const handleFileUpload = (e, setFile) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setFile(file);
    } else {
      alert("Only PDF files are allowed!");
    }
  };

  return (
    <div
      className={`bg-white p-6 rounded transform transition-transform duration-500 ${
        isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
      }`}
    >
      <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
        <AiOutlineFilePdf className="text-blue-500" /> Upload Academic Documents
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Academic Results Upload */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Results & Certificate (Combine as one PDF)
          </label>
          <label className=" flex items-center gap-2 cursor-pointer text-blue-500 hover:underline p-2 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200">
            <AiOutlineUpload className="text-xl" />
            <span>Browse File</span>
            <input
              type="file"
              accept="application/pdf"
              onChange={(e) => handleFileUpload(e, setAcademicFile)}
              className="hidden"
            />
          </label>
          {academicFile && (
            <p className="text-sm text-green-600 mt-1">{academicFile.name}</p>
          )}
        </div>

        {/* ID Upload */}
        <div>
          <label className="flex items-center text-gray-700 font-medium mb-2">
            <AiOutlineIdcard className="text-blue-500 mr-3 text-lg" />
            Upload ID
          </label>
          <select
            value={idType}
            onChange={(e) => setIdType(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded mb-2"
          >
            <option value="">Select ID Type</option>
            <option value="Ghana Card">Ghana Card</option>
            <option value="Voter ID">Voter ID</option>
            <option value="Student ID">Student ID</option>
          </select>
          <label className="flex items-center gap-2 cursor-pointer text-blue-500 hover:underline py-2 pl-1 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200">
            <AiOutlineUpload className="text-xl" />
            <span>Browse File</span>
            <input
              type="file"
              accept="application/pdf"
              onChange={(e) => handleFileUpload(e, setIdFile)}
              className="hidden"
            />
          </label>
          {idFile && (
            <p className="text-sm text-green-600 mt-1">{idFile.name}</p>
          )}
        </div>

        {/* Referee Details */}
        <div className="md:col-span-2">
          <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
            <AiOutlineUser className="text-blue-500" /> Referee Information
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Must be a Doctor, Senior Police/Army Officer, Head of Institution,
            or Reverend Minister/Clergy.
          </p>
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            value={referee.name}
            onChange={(e) => setReferee({ ...referee, name: e.target.value })}
            className="block w-full p-2 border border-gray-300 rounded mb-4"
          />
          <label className="block text-gray-700 font-medium mb-2">
            Address
          </label>
          <input
            type="text"
            placeholder="Enter Address"
            value={referee.address}
            onChange={(e) =>
              setReferee({ ...referee, address: e.target.value })
            }
            className="block w-full p-2 border border-gray-300 rounded mb-4"
          />
          <label className="block text-gray-700 font-medium mb-2">
            Contact
          </label>
          <input
            type="text"
            placeholder="Enter Contact"
            value={referee.contact}
            onChange={(e) =>
              setReferee({ ...referee, contact: e.target.value })
            }
            className="block w-full p-2 border border-gray-300 rounded mb-4"
          />
          <label className="block text-gray-700 font-medium mb-2">
            Upload Referee Letter (PDF only)
          </label>
          <label className="flex items-center gap-2 cursor-pointer text-blue-500 hover:underline p-2 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200">
            <AiOutlineUpload className="text-xl" />
            <span>Browse File</span>
            <input
              type="file"
              accept="application/pdf"
              onChange={(e) =>
                handleFileUpload(e, (file) =>
                  setReferee({ ...referee, letter: file })
                )
              }
              className="hidden"
            />
          </label>
          {referee.letter && (
            <p className="text-sm text-green-600 mt-1">{referee.letter.name}</p>
          )}
        </div>
      </div>
      
      <div className="mt-5">
        <SaveButton />
      </div>
    </div>
  );
};

export default UploadDocuments;

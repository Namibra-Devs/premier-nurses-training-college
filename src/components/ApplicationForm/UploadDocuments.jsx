import React, { useState, useEffect } from "react";
import {
  AiOutlineFilePdf,
  AiOutlineIdcard,
  AiOutlineUpload,
  AiOutlineDelete,
} from "react-icons/ai";
import SaveButton from "./Buttons/SaveButton";
import OverlayAlert from "./FormControls/OverlayAlert";

// Save document data to localStorage
const saveDocumentDetails = (documents) => {
  localStorage.setItem("documents", JSON.stringify(documents));
};

// Retrieve document data from localStorage
const retrieveDocumentDetails = () => {
  try {
    const documents = localStorage.getItem("documents");
    return documents
      ? JSON.parse(documents)
      : { idType: "", idFile: null, academicFile: null };
  } catch (error) {
    console.error("Error retrieving documents:", error);
    return { idType: "", idFile: null, academicFile: null };
  }
};

const UploadDocuments = () => {
  const [documents, setDocuments] = useState(retrieveDocumentDetails());
  const [isVisible, setIsVisible] = useState(false);

  // Load program data on component mount
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100); // Trigger the animation
  }, []);

  const handleFileUpload = (e, fileKey) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setDocuments((prev) => ({
        ...prev,
        [fileKey]: { name: file.name },
      }));
    } else {
      alert("Only PDF files are allowed!");
    }
  };

  const handleDeleteFile = (fileKey) => {
    setDocuments((prev) => ({
      ...prev,
      [fileKey]: null,
    }));
    saveDocumentDetails({
      ...documents,
      [fileKey]: null, // Update the file to null in localStorage as well
    });
  };

  const [showAlert, setShowAlert] = useState(false);
  const handleSave = (e) => {
    e.preventDefault();
    try {
      saveDocumentDetails(documents); // Save the data
      setShowAlert(true); // Show success alert
      setTimeout(() => setShowAlert(false), 3000); // Hide after 3 seconds
    } catch (error) {
      console.error("Save failed:", error);
    }
  };

  useEffect(() => {
    setDocuments(retrieveDocumentDetails());
  }, []);

  return (
    <>
      {showAlert && <OverlayAlert message="Data saved!" />}
      <div
        className={`bg-white p-4 rounded transform transition-transform duration-500 ${
          isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
        }`}>
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <AiOutlineFilePdf className="text-blue-500" /> Upload Academic
          Documents
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Academic Results Upload */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Results & Certificate (Combine as one PDF)
            </label>
            <label className="flex items-center gap-2 cursor-pointer text-blue-500 hover:underline p-2 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200">
              <AiOutlineUpload className="text-xl" />
              <span>Browse File</span>
              <input
                type="file"
                accept="application/pdf"
                onChange={(e) => handleFileUpload(e, "academicFile")}
                className="hidden"
              />
            </label>
            {documents.academicFile && (
              <div className="flex items-center gap-2 mt-2 text-green-600 text-sm">
                <span>{documents.academicFile.name}</span>
                <button
                  type="button"
                  onClick={() => handleDeleteFile("academicFile")}
                  className="text-red-500 hover:text-red-700"
                >
                  <AiOutlineDelete />
                </button>
              </div>
            )}
          </div>
          {/* ID Upload */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              ID Type
            </label>
            <select
              value={documents.idType}
              onChange={(e) =>
                setDocuments((prev) => ({ ...prev, idType: e.target.value }))
              }
              className="block w-full p-2 border border-gray-300 rounded mb-2"
            >
              <option value="">Select ID Type</option>
              <option value="Ghana Card">Ghana Card</option>
              <option value="Voter ID">Voter ID</option>
              <option value="Student ID">Student ID</option>
            </select>
            <label className="flex items-center gap-2 cursor-pointer text-blue-500 hover:underline p-2 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200">
              <AiOutlineUpload className="text-xl" />
              <span>Browse File</span>
              <input
                type="file"
                accept="application/pdf"
                onChange={(e) => handleFileUpload(e, "idFile")}
                className="hidden"
              />
            </label>
            {documents.idFile && (
              <div className="flex items-center gap-2 mt-2 text-green-600 text-sm">
                <span>{documents.idFile.name}</span>
                <button
                  type="button"
                  onClick={() => handleDeleteFile("idFile")}
                  className="text-red-500 hover:text-red-700"
                >
                  <AiOutlineDelete />
                </button>
              </div>
            )}
          </div>
        </form>
        {/* Save Button */}
        <div className="mt-6">
          <SaveButton onClick={handleSave} />
        </div>
      </div>
    </>
  );
};

export default UploadDocuments;
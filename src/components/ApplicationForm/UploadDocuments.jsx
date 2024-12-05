import React, { useState, useEffect } from "react";
import {
  AiOutlineFilePdf,
  AiOutlineUpload,
  AiOutlineDelete,
} from "react-icons/ai";
import { useContext } from "react";
import { FormDataContext } from "../Context/FormDataContext";

const UploadDocuments = () => {
  const {formData, setformData, saveFormData} = useContext(FormDataContext);
  const [isVisible, setIsVisible] = useState(false);

  // Load program data on component mount
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100); // Trigger the animation
  }, []);

  const handleFileUpload = (e, fileKey) => {
    const file = e.target.files[0];
    if (!file) return; // If no file is selected
    if (file.type !== "application/pdf") {
      alert("Only PDF files are allowed!");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      alert("File size should not exceed 5MB");
      return;
    }
    setformData((prev) => ({
      ...prev,
      [fileKey]: { name: file.name },
    }));
  };

  const handleDeleteFile = (fileKey) => {
    setformData((prev) => ({
      ...prev,
      [fileKey]: null,
    }));
    saveFormData({
      ...formData,
      [fileKey]: null, // Update the file to null in localStorage as well
    });
  };

  return (
    <>
      <div
        className={`transform transition-transform duration-500 ${
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
            {formData.academicFile && (
              <div className="flex items-center gap-2 mt-2 text-green-600 text-sm">
                <span>{formData.academicFile.name}</span>
                <button
                  type="button"
                  onClick={() => handleDeleteFile("academicFile")}
                  className="text-red-500 hover:text-red-700">
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
              value={formData.idType}
              onChange={(e) => setformData((prev) => ({ ...prev, idType: e.target.value }))}
              className="block w-full p-2 border border-gray-300 rounded mb-2">
              <option value="" > -- Select ID Type -- </option>
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
            {formData.idFile && (
              <div className="flex items-center gap-2 mt-2 text-green-600 text-sm">
                <span>{formData.idFile.name}</span>
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
      </div>
    </>
  );
};

export default UploadDocuments;

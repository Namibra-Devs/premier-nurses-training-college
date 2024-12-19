import React, { useState, useEffect } from "react";
import { AiOutlineUser, AiOutlineUpload, AiOutlineDelete} from "react-icons/ai";
import SaveButton from "./Buttons/SaveButton";
import OverlayAlert from "./FormControls/SuccessAlert";
import { useFormContext } from "./FormContext/FormProvider";

// Save and retrieve referee details in localStorage
const saveRefereeDetails = (referee) => {
  localStorage.setItem("referee", JSON.stringify(referee));
};

const retrieveRefereeDetails = () => {
  try {
    const referee = localStorage.getItem("referee");
    return referee ? JSON.parse(referee) : "";
  } catch (error) {
    console.error("Error retrieving referee details:", error);
    return "";
  }
};

const Referee = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [referee, setReferee] = useState(retrieveRefereeDetails() || {});
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const {updateFormData} = useFormContext();

  // Trigger animation on component mount
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);
  
  useEffect(() =>{
    updateFormData("referee", referee);
  }, [updateFormData]);
  
  // Validation function
  const validate = () => {
    const newErrors = {};
    if (!referee.name || !/^[a-zA-Z\s]+$/.test(referee.name)) {
      newErrors.name = "Referee name is required.";
    }
    if (!referee.address) {
      newErrors.address = "Referee address is required.";
    }
    if (!referee.contact || !/^\d{10}$/.test(referee.contact)) {
      newErrors.contact =
        "Referee contact is required and must be a 10-digit number.";
    }
    if (!referee.letter) {
      newErrors.letter = "A referee letter (PDF) is required.";
    }
    return newErrors;
  };

  // File upload handler
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type !== "application/pdf") {
        alert("Only PDF files are allowed!");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        alert("File size should not exceed 5MB");
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        setReferee({
          ...referee,
          letter: reader.result,
          letterName: file.name,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  // Delete uploaded file
  const handleDeleteFile = () => {
    setReferee({ ...referee, letter: null, letterName: null });
  };

  // Save data
  const handleSave = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      saveRefereeDetails(referee);
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    }
  };

  return (
    <>
      {showAlert && <OverlayAlert message="Referee saved!" />}
      <div
        className={`bg-white p-4 rounded transform transition-transform duration-500 overflow-hidden ${
          isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
        }`}
      >
        <div className="md:col-span-2">
          <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2">
            <AiOutlineUser className="text-blue-500" /> Referee Information
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Must be a Doctor, Senior Police/Army Officer, Head of Institution,
            or Reverend Minister/Clergy.
          </p>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  value={referee.name || ""}
                  onChange={(e) =>
                    setReferee({ ...referee, name: e.target.value })
                  }
                  className="block w-full p-2 border border-gray-300 rounded"
                />
                {errors.name && (
                  <p className="text-red-600 text-xs">{errors.name}</p>
                )}
              </div>

              {/* Address */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="Enter Address"
                  value={referee.address || ""}
                  onChange={(e) =>
                    setReferee({ ...referee, address: e.target.value })
                  }
                  className="block w-full p-2 border border-gray-300 rounded"
                />
                {errors.address && (
                  <p className="text-red-600 text-xs">{errors.address}</p>
                )}
              </div>

              {/* Contact */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Contact
                </label>
                <input
                  type="text"
                  placeholder="Enter Contact"
                  value={referee.contact || ""}
                  onChange={(e) =>
                    setReferee({ ...referee, contact: e.target.value })
                  }
                  className="block w-full p-2 border border-gray-300 rounded"
                />
                {errors.contact && (
                  <p className="text-red-600 text-xs">{errors.contact}</p>
                )}
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Upload Referee Letter (PDF only)
                </label>
                <label className="flex items-center gap-2 cursor-pointer text-blue-500 hover:underline p-2 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200">
                  <AiOutlineUpload className="text-xl" />
                  <span>Browse File</span>
                  <input
                    type="file"
                    accept="application/pdf"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
                {errors.letter && (
                  <p className="text-red-600 text-xs">{errors.letter}</p>
                )}
                {referee.letterName && (
                  <p className="text-sm text-green-600 mt-1">
                    Uploaded: {referee.letterName}
                  </p>
                )}
              </div>
            </div>

            {/* Uploaded Letter Preview */}
            {referee.letter && (
              <div className="mt-4">
                <iframe
                  src={referee.letter}
                  title="Referee Letter"
                  className="w-full h-64 border border-gray-300 rounded"
                ></iframe>
              </div>
            )}

            {/* Buttons */}
            <div className="flex items-center justify-between mt-4">
              <button
                type="button"
                onClick={handleDeleteFile}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 flex items-center"
              >
                <AiOutlineDelete className="text-lg mr-2" />
                Delete Letter
              </button>
              <SaveButton onClick={handleSave} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Referee;

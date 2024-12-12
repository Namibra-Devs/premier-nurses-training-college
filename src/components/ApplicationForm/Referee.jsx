import React, { useState, useEffect } from "react";
import { AiOutlineUser, AiOutlineUpload, AiOutlineDelete } from "react-icons/ai";
import SaveButton from "./Buttons/SaveButton";
import OverlayAlert from "./FormControls/OverlayAlert";

const saveRefereeDetails = (referee) => {
  localStorage.setItem("referee", JSON.stringify(referee));
};

const retriveRefereeDetails = () => {
  try {
    const referee = localStorage.getItem("referee");
    return referee ? JSON.parse(referee) : "";
  } catch (error) {
    console.error("Error retrieving program:", error);
    return "";
  }
};

const Referee = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [referee, setReferee] = useState(retriveRefereeDetails() || "");
  // Load program data on component mount
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100); // Trigger the animation
  }, []);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      const reader = new FileReader();
      reader.onload = () => {
        setReferee({ ...referee, letter: reader.result }); // Store Base64 string
      };
      reader.readAsDataURL(file);
    } else {
      alert("Only PDF files are allowed!");
    }
  };

  const handleDeleteFile = () => {
    setReferee({ ...referee, letter: null }); // Remove the letter from state
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveRefereeDetails(referee);
  };

  // Handle Saved Alert
  const [showAlert, setShowAlert] = useState(false);
  const handleSave = (e) => {
    e.preventDefault();

    try {
      saveRefereeDetails(referee); // Save the data
      setShowAlert(true); // Show success alert
      setTimeout(() => setShowAlert(false), 3000); // Hide after 3 seconds
    } catch (error) {
      console.error("Save failed:", error);
    }
  };

  return (
    <>
      {showAlert && <OverlayAlert message="Referee saved!" />}
      <div
        className={`bg-white p-4 rounded transform transition-transform duration-500 ${
          isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
        }`}
      >
        {/* Referee Details */}
        <div className="md:col-span-2">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <AiOutlineUser className="text-blue-500" /> Referee Information
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Must be a Doctor, Senior Police/Army Officer, Head of Institution,
            or Reverend Minister/Clergy.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  className="block w-full p-2 border border-gray-300 rounded mb-4"
                />
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
                  className="block w-full p-2 border border-gray-300 rounded mb-4"
                />
              </div>
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
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>

                {referee.letter && (
                  <p className="text-sm text-green-600 mt-1">
                    {referee.letter.name}
                  </p>
                )}
              </div>
            </div>
            <div className="mt-4">
              {referee.letter ? (
                <>
                  <h4 className="text-green-600 font-medium">
                    Uploaded Letter:
                  </h4>
                  <iframe
                    src={referee.letter}
                    title="Referee Letter"
                    className="w-full h-64 border border-gray-300 rounded"
                  ></iframe>
                </>
              ) : (
                <p className="text-sm text-gray-600 mt-2">
                  No letter uploaded.
                </p>
              )}
            </div>
            <div className="flex items-center justify-between mt-4">
              <button
                onClick={handleDeleteFile}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 flex items-center"
              ><AiOutlineDelete className="text-lg mr-2" />
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
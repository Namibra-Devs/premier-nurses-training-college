import React, { useState, useEffect } from "react";
import programsData from "./programs";
import SaveButton from "../Buttons/SaveButton";
import OverlayAlert from "../FormControls/OverlayAlert";

const saveProgram = (selectedProgram) => {
  localStorage.setItem("selectedProgram", JSON.stringify(selectedProgram));
};

const retriveProgram = () => {
  try {
    const selectedProgram = localStorage.getItem("selectedProgram");
    return selectedProgram ? JSON.parse(selectedProgram) : "";
  } catch (error) {
    console.error("Error retrieving program:", error);
    return "";
  }
};

const ProgramChoice = () => {
  const [selectedProgram, setSelectedProgram] = useState(
    retriveProgram() || ""
  );
  const [programs, setPrograms] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  // Load program data on component mount
  useEffect(() => {
    setPrograms(programsData);
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  // Handle Saved Alert
  const handleSubmit = (e) => {
    e.preventDefault();
    saveProgram(selectedProgram);
  };

  const [showAlert, setShowAlert] = useState(false);
  const handleSave = (e) => {
    e.preventDefault();

    try {
      saveProgram(selectedProgram); // Save the data
      setShowAlert(true); // Show success alert
      setTimeout(() => setShowAlert(false), 3000); // Hide after 3 seconds
    } catch (error) {
      console.error("Save failed:", error);
    }
  };

  return (
    <div>
      {showAlert && <OverlayAlert message="Program saved!" />}
      <div
        className={`bg-white p-6 rounded transform transition-transform duration-500 ${
          isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
        }`}
      >
        <h2 className="text-2xl font-semibold mb-6">Program Choice</h2>

        <div>
          <label
            htmlFor="program"
            className="block text-gray-700 font-medium mb-2"
          >
            Select a Program
          </label>
          <form onSubmit={handleSubmit} className="relative">
            <select
              id="program"
              value={selectedProgram}
              onChange={(e) => setSelectedProgram(e.target.value)}
              className="block w-full p-3 border border-gray-300 rounded"
            >
              <option value="">-- Select a Program --</option>
              {programs.map((program) => (
                <option key={program.id} value={program.name}>
                  {program.name}
                </option>
              ))}
            </select>
            {selectedProgram && (
              <p className="text-sm text-green-600 mt-2">
                You selected: <strong>{selectedProgram}</strong>
              </p>
            )}
          </form>
        </div>

        <div className="mt-5">
          <SaveButton onClick={handleSave} />
        </div>
      </div>
    </div>
  );
};

export default ProgramChoice;

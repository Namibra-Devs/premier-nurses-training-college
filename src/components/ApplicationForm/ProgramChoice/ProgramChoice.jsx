import React, { useState, useEffect } from "react";
import programsData from "./programs";
import SaveButton from "../Buttons/SaveButton";
import OverlayAlert from "../FormControls/SuccessAlert";
import { useFormContext } from "../FormContext/FormProvider";

// Save selected program to localStorage
const saveProgram = (selectedProgram) => {
  localStorage.setItem("selectedProgram", JSON.stringify(selectedProgram));
};

// Retrieve selected program from localStorage
const retrieveProgram = () => {
  try {
    const selectedProgram = localStorage.getItem("selectedProgram");
    return selectedProgram ? JSON.parse(selectedProgram) : null;
  } catch (error) {
    console.error("Error retrieving program:", error);
    return null;
  }
};

const ProgramChoice = () => {
  const [selectedProgram, setSelectedProgram] = useState(
    retrieveProgram() || { program: "" }
  );
  const [programs, setPrograms] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const {updateFormData} = useFormContext();

  // Load program data on component mount
  useEffect(() => {
    setPrograms(programsData);
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  useEffect(() => {
    updateFormData("selectedProgram", selectedProgram);
  }, [updateFormData]);

  // Validation function
  const validate = () => {
    const newErrors = {};
    if (!selectedProgram.program) {
      newErrors.program = "Please select a program.";
    }
    return newErrors;
  };

  // Handle Save
  const handleSave = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        saveProgram(selectedProgram); // Save to localStorage
        setErrors({});
        setShowAlert(true); // Show success alert
        setTimeout(() => setShowAlert(false), 1000); // Hide after 1 second
      } catch (error) {
        console.error("Save failed:", error);
      }
    }
  };

  // Handle Program Selection Change
  const handleChange = (e) => {
    setSelectedProgram({ program: e.target.value });
    setErrors({});
  };

  return (
    <div>
      {showAlert && <OverlayAlert message="Program saved!" />}
      <div
        className={`bg-white p-4 rounded transform transition-transform duration-500 overflow-hidden ${
          isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
        }`}>
        <h2 className="text-2xl font-semibold mb-6">Program Choice</h2>

        <div>
          <label
            htmlFor="program"
            className="block text-gray-700 font-medium mb-2"
          >
            Select a Program
          </label>
          <form onSubmit={handleSave} className="relative">
            <select
              id="program"
              name="program"
              value={selectedProgram.program}
              onChange={handleChange}
              className="block w-full p-3 border border-gray-300 rounded"
            >
              <option value="">-- Select a Program --</option>
              {programs.map((program) => (
                <option key={program.id} value={program.name}>
                  {program.name}
                </option>
              ))}
            </select>
            {errors.program && (
              <p className="text-red-500 text-xs mt-2">{errors.program}</p>
            )}
            {selectedProgram.program && (
              <p className="text-sm text-green-600 mt-2">
                You selected: <strong>{selectedProgram.program}</strong>
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

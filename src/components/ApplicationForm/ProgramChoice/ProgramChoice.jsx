import React, { useState, useEffect } from "react";
import programsData from "./programs";

const ProgramChoice = () => {
  const [selectedProgram, setSelectedProgram] = useState("");
  const [programs, setPrograms] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  // Load program data on component mount
  useEffect(() => {
    setPrograms(programsData); // Simulates fetching from a JSON file
    setTimeout(() => setIsVisible(true), 100); // Trigger the animation
  }, []);

  return (
    <div
      className={`bg-white p-6 rounded transform transition-transform duration-500 ${
        isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
      }`}
    >
      <h2 className="text-2xl font-semibold mb-6">Program Choice</h2>

      <div>
        <label htmlFor="program" className="block text-gray-700 font-medium mb-2">
          Select a Program
        </label>
        <div className="relative">
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
        </div>
      </div>
    </div>
  );
};

export default ProgramChoice;

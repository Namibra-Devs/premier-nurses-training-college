import React, { useState, useEffect } from "react";
import programsData from "./programs";

const ProgramChoice = () => {
  const [selectedProgram, setSelectedProgram] = useState("");
  const [programs, setPrograms] = useState([]);

  // Load program data on component mount
  useEffect(() => {
    setPrograms(programsData); // Simulates fetching from a JSON file
  }, []);

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-6">Program Choice</h2>

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

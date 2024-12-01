import React, { useState, useEffect, useContext } from "react";
import programsData from "./programs";
import { FormDataContext } from "../../Context/FormDataContext";


const ProgramChoice = () => {
  const {formData, setformData} = useContext(FormDataContext)
  const [programs, setPrograms] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  // Load program data on component mount
  useEffect(() => {
    setPrograms(programsData);
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div>
      <div className={`transform transition-transform duration-500 ${
          isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
        }`}>
        <h2 className="text-2xl font-semibold mb-6">Program Choice</h2>
        <div>
          <label
            htmlFor="program"
            className="block text-gray-700 font-medium mb-2">
            Select a Program
          </label>
          <form className="relative">
            <select
              id="program"
              value={formData}
              onChange={(e) => setformData(e.target.value)}
              className="block w-full p-3 border border-gray-300 rounded"
            >
              <option value="">-- Select a Program --</option>
              {programs.map((program) => (
                <option key={program.id} value={program?.name}>
                  {program.name}
                </option>
              ))}
            </select>
            {formData && (
              <div className="text-sm text-green-600 mt-2 flex items-center gap-1">
                You selected: <h1 className="font-semibold">{formData}</h1>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProgramChoice;

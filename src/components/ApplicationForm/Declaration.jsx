import React, { useState, useEffect } from "react";
import SaveButton from "./Buttons/SaveButton";

const Declaration = ({ onSave }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Load program data on component mount
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100); // Trigger the animation
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    date: "",
  });

  const handleSave = (e) => {
    onSave(formData);
  };

  return (
    <div
      className={`bg-white p-6 rounded transform transition-transform duration-500 ${
        isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
      }`}
    >
      <h2 className="text-2xl font-semibold mb-6">Declaration</h2>

      <p className="text-gray-700 mb-4">
        I hereby declare that the information given above is true.
      </p>

      <div className="space-y-4">
        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-2"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData(e.target.value)}
            placeholder="Enter your name"
            className="block w-full p-3 border border-gray-300 rounded"
          />
        </div>

        {/* Date Field */}
        <div>
          <label
            htmlFor="date"
            className="block text-gray-700 font-medium mb-2"
          >
            Date
          </label>
          <input
            id="date"
            type="date"
            value={formData.date}
            onChange={(e) => setFormData(e.target.value)}
            className="block w-full p-3 border border-gray-300 rounded"
          />
        </div>
      </div>

      <div className="mt-5">
        <SaveButton onClick={() => handleSave("declaration", formData)} />
      </div>
    </div>
  );
};

export default Declaration;

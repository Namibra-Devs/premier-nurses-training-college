import React, { useState, useEffect } from "react";
import OverlayAlert from "./FormControls/OverlayAlert";

const saveDeclaration = (declaration) => {
  localStorage.setItem("declaration", JSON.stringify(declaration));
};

const retriveDeclaration = () => {
  const declaration = localStorage.getItem("declaration");
  if (declaration) {
    return JSON.parse(declaration);
  }
  return {}; // Return an empty object instead of an empty string
};

const Declaration = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [declaration, setDeclarationData] = useState(retriveDeclaration()); // Start with an empty object if no data is found in localStorage

  // Load program data on component mount
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100); // Trigger the animation
  }, []);

  const handleChange = (e) => {
    setDeclarationData({ ...declaration, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    try {
      saveDeclaration(declaration); // Save the data to localStorage
      setShowAlert(true); // Show success alert
      setTimeout(() => setShowAlert(false), 3000); // Hide alert after 3 seconds
    } catch (error) {
      console.error("Save failed:", error);
    }
  };

  return (
    <>
      {showAlert && <OverlayAlert message="Declaration saved!" />}
      <div
        className={` transform transition-transform duration-500 ${
          isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
        }`}
      >
        <h2 className="text-2xl font-semibold mb-6">Declaration</h2>

        <p className="text-gray-700 mb-4">
          I hereby declare that the information given above is true.
        </p>

        <form onSubmit={handleSave} className="space-y-4">
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
              name="name"
              value={declaration?.name || ""}
              onChange={handleChange}
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
              name="date"
              value={declaration?.date || ""}
              onChange={handleChange}
              className="block w-full p-3 border border-gray-300 rounded"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Declaration;

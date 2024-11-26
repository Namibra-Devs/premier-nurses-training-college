import React, { useState, useEffect } from "react";
import PaperPlane from "../../assets/paper-plane.png";

const FinalSubmit = ({ onSubmit }) => {
  const [isVisible, setIsVisible] = useState(false);
  // Load program data on component mount
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100); // Trigger the animation
  }, []);

  return (
    <div
      className={`bg-white relative overflow-hidden p-6 rounded transform transition-transform duration-500 ${
        isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
      }`}
    >
      <div className="relative z-10">
        <h2 className="text-xl font-semibold mb-4">Submit Application</h2>
        <p>Please review your application before submission.</p>
        <button
          onClick={onSubmit}
          className="bg-green-500 hover:bg-green-600 hover:shadow-custom-light text-white py-2 px-4 mt-4 rounded"
        >
          Submit Application
        </button>
      </div>

      <img
        src={PaperPlane}
        alt="paper-plane"
        className="w-[25%] object-cover absolute bottom-24 md:bottom-2 right-4 md:right-24 z-0"
      />
    </div>
  );
};

export default FinalSubmit;

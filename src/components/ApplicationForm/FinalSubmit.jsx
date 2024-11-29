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
      className={`bg-white relative overflow-hidden transform transition-transform duration-500 ${
        isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
      }`}
    >
      <div className="relative z-10 my-5 md:my-10">
        <h2 className="text-xl font-semibold mb-4">Submit Application</h2>
        <p>Please review your application before submission.</p>
      </div>

      <img
        src={PaperPlane}
        alt="paper-plane"
        className="w-[60%] md:w-[25%] object-cover absolute bottom-2 md:bottom-0 right-4 md:right-24 z-0"
      />
    </div>
  );
};

export default FinalSubmit;

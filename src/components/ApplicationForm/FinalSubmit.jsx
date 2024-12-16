import React, { useState, useEffect } from "react";
import PaperPlane from "../../assets/paper-plane.png";

const FinalSubmit = () => {
  const [isVisible, setIsVisible] = useState(false);
  // Load program data on component mount
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100); // Trigger the animation
  }, []);

  return (
    <div
      className={`bg-white p-4 rounded relative overflow-hidden transform transition-transform duration-500 ${
        isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
      }`}>
      <div className="relative z-10 py-5 md:py-10">
        <h2 className="text-2xl font-semibold mb-4">Submit Application</h2>
        <p>Please review your application before submission.</p>
      </div>

      <img
        src={PaperPlane}
        alt="paper-plane"
        className="w-[60%] md:w-[25%] object-cover absolute bottom-2 md:bottom-4 right-4 md:right-24 z-0"/>
    </div>
  );
};

export default FinalSubmit;

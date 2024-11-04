// CTAButton.jsx
import React from "react";

const CTAButtonSticky = () => {
  return (
    <div className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-20 text-center">
      <a
        href="/apply" // Change this to your actual application link
        className="bg-gradient-to-r from-blue-800 to bg-primary text-white text-center uppercase
        text-xs md:text-sm px-6 md:px-8 py-3 rounded-full shadow-lg font-semibold hover:mb-3"
      >
        Apply Now
      </a>
      <div className="text-xs mt-5  text-center">
        <p className="text-primary font-medium">Limited spots available!</p>
        <p className="text-white font-medium">Limited spots available!</p>
      </div>
    </div>
  );
};

export default CTAButtonSticky;

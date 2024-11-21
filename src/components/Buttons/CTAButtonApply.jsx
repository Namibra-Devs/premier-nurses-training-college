// CTAButton.jsx
import React from "react";

const CTAButtonApply = () => {
  return (
    <a href="/registration-page" className="inline-block my-8 md:my-0">
      <button
        className="bg-yellow-400 text-white hover:bg-yellow-300 border-2 border-yellow-400 hover:border-yellow-300
          hover:shadow-custom-light px-11 py-3 md:px-24 md:py-4 rounded-full text-sm uppercase font-semibold
          transition-transform duration-500 transform hover:-translate-y-2"
      >
        Apply Now
      </button>
    </a>
  );
};


export default CTAButtonApply;

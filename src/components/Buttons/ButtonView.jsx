import React from "react";

const ButtonView = ({ label }) => {
  return (
    <button
      className="bg-gradient-to-r from-blue-800 to bg-primary text-white hover:bg-blue-500 
      hover:shadow-custom-light px-6 md:px-8 py-3 md:py-3 rounded-full text-sm capitalize font-semibold
      transition-transform duration-700 transform hover:-translate-y-2"
    >
      {label}
    </button>
  );
};

export default ButtonView;

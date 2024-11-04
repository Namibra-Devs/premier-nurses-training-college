import React from "react";
import { Link } from "react-router-dom";

const ButtonOutline = ({ label }) => {
  return (
    <button
      className="bg-transparent hover:bg-white border-2 border-white hover:border-white 
        duration-500 ease text-white hover:text-primary px-4 md:px-6 py-2 md:py-3 rounded-3xl text-sm 
        uppercase font-medium hover:scale-110"
    >
      {label}
    </button>
  );
};

export default ButtonOutline;

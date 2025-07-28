import React from "react";
import { Link } from "react-router-dom";

const ButtonView = ({ label, onClick, link, type = "button" }) => {
  if (link) {
    return (
      <Link
       to={link}
        className="bg-gradient-to-r from-blue-800 to bg-primary text-white hover:bg-blue-500 
        hover:shadow-custom-light px-6 md:px-8 py-3 md:py-3 rounded-full text-sm capitalize font-semibold
        transition-transform duration-700 transform hover:-translate-y-2 inline-block text-center"
      >
        {label}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-gradient-to-r from-blue-800 to bg-primary text-white hover:bg-blue-500 
      hover:shadow-custom-light px-6 md:px-8 py-3 md:py-3 rounded-full text-sm capitalize font-semibold
      transition-transform duration-700 transform hover:-translate-y-2"
    >
      {label}
    </button>
  );
};

export default ButtonView;

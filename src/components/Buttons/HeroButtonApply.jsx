import React from "react";
import { Link } from "react-router-dom";

const HeroButtonApply = ({ label, link }) => {
  return (
    <Link to={link}>
      <button
        className="bg-yellow-500 hover:bg-yellow-400 border-2 border-transparent duration-500 hover:scale-110 
 text-white px-4 md:px-6 py-2 md:py-3 rounded-3xl text-sm uppercase font-medium"
      >
        {label}
      </button>
    </Link>
  );
};

export default HeroButtonApply;

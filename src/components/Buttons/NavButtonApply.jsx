import React from "react";
import { Link } from "react-router-dom";

const NavButtonApply = () => {
  return (
    <Link to="/registration-page">
      <button
        className="bg-primary md:bg-yellow-500  hover:bg-yellow-400 rounded-3xl 
      duration-500 ease text-white px-6 py-2 text-sm uppercase font-medium hover:scale-110"
      >
        Apply Now
      </button>
    </Link>
  );
};

export default NavButtonApply;

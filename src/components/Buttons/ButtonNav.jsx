import React from "react";
import { Link } from "react-router-dom";

const ButtonNav = () => {
  return (
    <Link to="/">
      <button className="bg-primary md:bg-yellow-500  hover:bg-yellow-400 rounded-full duration-700 ease text-white px-6 py-2 text-sm uppercase font-medium">
        Apply Now
      </button>
    </Link>
  );
};

export default ButtonNav;

import React from "react";
import { Link } from "react-router-dom";

const ButtonOutline = () => {
  return (
    <Link to="/">
      <div>
        <button className="bg-transparent hover:bg-white border-2 border-white hover:border-white 
        duration-700 ease text-white hover:text-primary px-4 md:px-6 py-2 md:py-3 rounded-full text-sm 
        uppercase font-medium">
          Request Info
        </button>
      </div>
    </Link>
  );
};

export default ButtonOutline;

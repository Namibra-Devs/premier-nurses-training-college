import React from "react";
import { Link } from 'react-router-dom';

const ButtonPrimary = () => {
  return (
    <Link to="/">
      <button className="duration-700 ease text-white px-4 md:px-6 py-2 text-sm uppercase font-medium">
        Apply Now
      </button>
    </Link>
  );
};

export default ButtonPrimary;

import React from "react";
import { Link } from "react-router-dom";

const SubmitButton = ({ url, label , handleAccess}) => {
  return (
    <Link to={url}>
      <button
      onClick={handleAccess}
        type="submit"
        className="w-full py-3 px-4 bg-gradient-to-r from-blue-800 to bg-primary text-white rounded-3xl font-semibold hover:bg-blue-800 transition duration-300"
      >
        {label}
      </button>
    </Link>
  );
};

export default SubmitButton;

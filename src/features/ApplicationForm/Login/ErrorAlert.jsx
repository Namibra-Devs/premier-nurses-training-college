import React from "react";
import { FiAlertTriangle } from "react-icons/fi";

const ErrorAlert = ({ message }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 shadow-lg flex flex-col items-center">
        <FiAlertTriangle className="text-red-700 text-4xl mb-4" />
        <p className="text-gray-800 text-sm font-semibold text-center">
          {message}
        </p>
      </div>
    </div>
  );
};

export default ErrorAlert;

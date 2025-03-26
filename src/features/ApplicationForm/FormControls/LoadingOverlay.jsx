import React from "react";
import {AiOutlineLoading3Quarters} from "react-icons/ai";

const LoadingOverlay = ({ message }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 shadow-lg flex flex-col items-center">
        <AiOutlineLoading3Quarters className="animate-spin text-primary text-4xl" />
        <p className="text-gray-800 text-sm font-semibold text-center mt-2">
          {message}
        </p>
      </div>
    </div>
  );
};

export default LoadingOverlay;

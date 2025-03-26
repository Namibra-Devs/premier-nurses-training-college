import React from "react";
import {AiOutlineCheckCircle} from "react-icons/ai";

const SuccessAlert = ({ message }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 shadow-lg flex flex-col items-center">
         <AiOutlineCheckCircle className="text-4xl" color="green" />
        <p className="text-gray-800 text-sm font-semibold text-center mt-2">
          {message}
        </p>
      </div>
    </div>
  );
};

export default SuccessAlert;

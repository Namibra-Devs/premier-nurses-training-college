import React from "react";
import {
  AiOutlineLoading3Quarters,
  // AiOutlineCheckCircle,
} from "react-icons/ai";

const OverlayAlert = ({ message }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 shadow-lg flex flex-col items-center">
        <AiOutlineLoading3Quarters className="animate-spin text-primary text-4xl mb-4" />

        {/* NOTE! This's a "check mark" to show for successful "messages"// Uncomment it and render the condition to show together with "Successful!" Message */}
        {/* <AiOutlineCheckCircle className="text-4xl" color="green" /> */}
        <p className="text-gray-800 text-lg font-semibold text-center">
          {message}
        </p>
      </div>
    </div>
  );
};

export default OverlayAlert;

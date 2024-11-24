import React from "react";
import AppSystem from "./AppSystem";

const ApplicationPage = () => {
  return (
    <div className="bg-white fixed w-full px-4 md:px-10 py-2 flex flex-col">
      <div className="flex flex-col md:flex-row items-start justify-between gap-5 md:gap-10">
        <div className="text-left">
          {/* title */}
          <h3 className="text-gray-800 text-lg text-left capitalize font-medium">
            Admission Application System
            <span className="text-blue-600 font-semibold"> PNTC</span>
          </h3>
        </div>
        <p className="font-normal text-base text-left md:text-right text-gray-600 max-w-lg">
          A step-by-step guide to simplify the admissions.
        </p>
      </div>
      {/* Application System Display */}
      <AppSystem />
    </div>
  );
};

export default ApplicationPage;

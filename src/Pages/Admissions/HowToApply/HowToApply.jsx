import React from "react";
import ApplicationProcess from "./ApplicationProcess";

const HowToApply = () => {
  return (
    <div className="bg-gray-50 px-4 md:px-14 lg:px-24 xl:px-40 py-24 flex flex-col">
      <div className="flex flex-col md:flex-row items-start justify-between gap-5 md:gap-10 mb-10 md:mb-2">
        <div className="text-left">
          {/* title */}
          <h3 className="text-primary text-sm text-left uppercase font-medium">
            How to Apply{" "}
            <span className="text-yellow-400 font-semibold">PNTC</span>
          </h3>
          {/* Subtitle */}
          <h1 className="text-gray-700 text-2xl leading-2 tracking-tight font-semibold max-w-full mt-2 mb-2 md:mb-5">
            Application Process
          </h1>
        </div>
        <p className="font-normal text-base text-left md:text-right text-gray-600 max-w-lg">
          A step-by-step guide to simplify the admissions process, helping
          applicants understand how to start their journey.
        </p>
      </div>
      {/* Application Process Display */}
      <ApplicationProcess />
    </div>
  );
};

export default HowToApply;

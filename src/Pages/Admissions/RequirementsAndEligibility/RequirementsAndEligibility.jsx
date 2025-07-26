import React from "react";
import RequirementsAndAnswers from "./RequirementsAndAnswers";

const RequirementsAndEligibility = () => {
  return (
    <div className="bg-white px-4 md:px-14 lg:px-24 xl:px-40 py-24 flex flex-col">
      <div className="flex flex-col md:flex-row items-start justify-between gap-5 md:gap-10 mb-10 md:mb-2">
        <div className="text-left">
          {/* title */}
          <h3 className="text-primary text-sm text-left uppercase font-medium">
            Academic Standards{" "}
            <span className="text-yellow-400 font-semibold">PNTC</span>
          </h3>
          {/* Subtitle */}
          <h1 className="text-gray-700 text-2xl leading-2 tracking-tight font-semibold max-w-full mt-3 mb-0 md:mb-5">
            Requirements & Eligibility
          </h1>
        </div>
        <p className="font-normal text-base text-left md:text-right text-gray-600 max-w-lg">
          Applicants are required to meet the following academic qualifications:
        </p>
      </div>
    <RequirementsAndAnswers/>
    </div>
  );
};

export default RequirementsAndEligibility;

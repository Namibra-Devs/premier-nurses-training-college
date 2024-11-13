import React from "react";
import Dates from "./Dates";

const DatesAndDeadlines = () => {
  return (
    <div className="bg-gray-50 px-4 md:px-14 lg:px-24 xl:px-40 pb-24 flex flex-col">
      <div className="flex flex-col md:flex-row items-start justify-between gap-5 md:gap-10 mb-10 md:mb-2">
        <div className="text-left">
          {/* title */}
          <h3 className="text-primary text-sm text-left uppercase font-medium">
            Dates And Deadlines{" "}
            <span className="text-yellow-400 font-semibold">PNTC</span>
          </h3>
          {/* Subtitle */}
          <h1 className="text-gray-700 text-2xl leading-2 tracking-tight font-semibold max-w-full mt-3 mb-0 md:mb-5">
            Important Dates And Deadlines
          </h1>
        </div>
        <p className="font-normal text-base text-left md:text-right text-gray-600 max-w-lg">
          Lists specific dates for submitting applications, document deadlines,
          and enrollment confirmations to keep applicants on track.
        </p>
      </div>
      {/* Application Process Display */}
      <Dates />
    </div>
  );
};

export default DatesAndDeadlines;

import React from "react";
import FDirectories from "./FDirectories";

const FacultyDirectory = () => {
  return (
    <div className="bg-gray-50 px-4 md:px-14 lg:px-24 xl:px-40 pt-2 pb-24 md:py-24 flex flex-col justify-center">
      <div className="flex flex-col md:flex-row items-start justify-between gap-5 md:gap-10 mb-6">
        <div className="text-left">
          {/* title */}
          <h3 className="text-primary text-sm text-left uppercase font-medium">
            Faculty Directory{" "}
            <span className="text-yellow-400 font-semibold">PNTC</span>
          </h3>
          {/* Subtitle */}
          <h1 className="text-gray-700 text-2xl leading-2 tracking-tight font-semibold max-w-full mt-3">
            Faculty Directory | Members
          </h1>
        </div>
        <p className="font-normal text-base text-left md:text-right text-gray-600 max-w-lg">
          Each faculty member brings years of practical experience and a passion
          for teaching to create an engaging and supportive learning
          environment.
        </p>
      </div>
      <FDirectories/>
    </div>
  );
};
export default FacultyDirectory;

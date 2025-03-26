import React from "react";
import Programs from "./Programs";

const ProgramsOffered = () => {
  return (
    <div id="programs" className="bg-gray-50 px-4 md:px-14 lg:px-24 xl:px-40 py-24 flex flex-col">
      <div className="flex flex-col md:flex-row items-start justify-between gap-5 md:gap-10 mb-10 md:mb-0">
        <div className="text-left">
          {/* title */}
          <h3 className="text-primary text-sm text-left uppercase font-medium">
            Programs Offered{" "}
            <span className="text-yellow-400 font-semibold">PNTC</span>
          </h3>
          {/* Subtitle */}
          <h1 className="text-gray-700 text-2xl leading-2 tracking-tight font-semibold max-w-full mt-3 mb-0 md:mb-5">
            Programs Offered
          </h1>
        </div>
        <p className="font-normal text-base text-left md:text-right text-gray-600 max-w-lg">
          Our college provides a range of programs to meet diverse career
          aspirations in nursing. These include:
        </p>
      </div>
      {/* Programs Display */}
      <Programs/>
    </div>
  );
};

export default ProgramsOffered;

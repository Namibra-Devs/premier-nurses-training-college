import React from "react";
import Alumni from "./Alumni";

const AlumniNetwork = () => {
  return (
    <div className="bg-gradient-to-r from-blue-800 to bg-primary px-4 md:px-14 lg:px-24 xl:px-40 py-24 mb-24">
      <div className="flex flex-col md:flex-row items-start justify-between gap-5 md:gap-10 mb-10 md:mb-0">
        <div className="text-left">
          {/* title */}
          <h3 className="text-white text-sm text-left uppercase font-medium">
            Alumni Network{" "}
            <span className="text-yellow-400 font-semibold">PNTC</span>
          </h3>
          {/* Subtitle */}
          <h1 className="text-white text-2xl leading-2 tracking-tight font-semibold max-w-full mt-3 mb-0 md:mb-5">
            Alumni Network
          </h1>
        </div>
        <p className="font-normal text-base text-left md:text-right text-gray-50 max-w-lg">
          Reconnect with classmates and expand your professional network through
          our dedicated alumni platform.
        </p>
      </div>
      <Alumni />
    </div>
  );
};

export default AlumniNetwork;

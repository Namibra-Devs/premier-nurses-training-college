import React from "react";
import FacilitiesCarousel from "./FacilitiesCarousel";

const PntcInView = () => {
  return (
    <>
      <div className="bg-white px-4 md:px-14 lg:px-24 xl:px-40 pb-24 flex flex-col">
        <div className="flex flex-col md:flex-row items-start justify-between gap-5 md:gap-10 mb-10 md:mb-2">
          <div className="text-left">
            {/* title */}
            <h3 className="text-primary text-sm text-left uppercase font-medium">
              Facilites{" "}
            </h3>
            {/* Subtitle */}
            <h1 className="text-gray-700 text-2xl leading-2 tracking-tight font-semibold max-w-full mt-2 mb-2 md:mb-5">
              PNTC In View
            </h1>
          </div>
          <p className="font-normal text-base text-left md:text-right text-gray-600 max-w-lg">
            Our campus is designed to support hands-on learning and holistic
            student development. Key facilities include
          </p>
        </div>
        {/* Facilities Display */}
        <FacilitiesCarousel />
      </div>
    </>
  );
};

export default PntcInView;

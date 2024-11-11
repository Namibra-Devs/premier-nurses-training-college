import React from "react";
import FLeadership from "./Faculty/FLeadership";

const LeadershipAndFaculty = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-start justify-between gap-5 md:gap-10 mb-10 md:mb-0">
        <div className="text-left">
          {/* title */}
          <h3 className="text-primary text-sm text-left uppercase font-medium">
            Leadership and Faculty{" "}
            <span className="text-yellow-400 font-semibold">PNTC</span>
          </h3>
          {/* Subtitle */}
          <h1 className="text-gray-700 text-2xl leading-2 tracking-tight font-semibold max-w-full mt-3 mb-0 md:mb-5">
            Leadership and Faculty
          </h1>
        </div>
        <p className="font-normal text-base text-left md:text-right text-gray-600 max-w-lg">
          Our faculty comprises accomplished healthcare professionals and
          dedicated educators, led by a board of seasoned leaders in the nursing
          field.
        </p>
      </div>
      <FLeadership/>
    </div>
  );
};

export default LeadershipAndFaculty;

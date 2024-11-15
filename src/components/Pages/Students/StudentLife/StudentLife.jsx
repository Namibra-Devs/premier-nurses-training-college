import React from "react";
import studentLifeData from "./studentLifeData";
import Overview from "./Overview";
import InfoForStudents from "./infoForStudents";

const StudentLife = () => {
  return (
    <>
    <div className="bg-white px-4 md:px-14 lg:px-24 xl:px-40 pb-14 pt-24 flex flex-col">
      <div className="flex flex-col md:flex-row items-start justify-between gap-5 md:gap-10 mb-10 md:mb-2">
        <div className="text-left">
          {/* title */}
          <h3 className="text-primary text-sm text-left uppercase font-medium">
            {studentLifeData.overview.title}{" "}
            <span className="text-yellow-400 font-semibold">PNTC</span>
          </h3>
          {/* Subtitle */}
          <h1 className="text-gray-700 text-2xl leading-2 tracking-tight font-semibold max-w-full mt-2 mb-2 md:mb-5">
            {studentLifeData.overview.subtitle}
          </h1>
        </div>
        <p className="font-normal text-base text-left md:text-right text-gray-600 max-w-lg">
          {studentLifeData.overview.headline}
        </p>
      </div>
      {/* Overview Section Display, together with bg images fade */}
      <Overview/>
    </div>
    <InfoForStudents/>
    </>
  );
};

export default StudentLife;

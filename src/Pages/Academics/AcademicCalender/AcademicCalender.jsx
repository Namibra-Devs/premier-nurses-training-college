import React from "react";
import UpcomingEvents from "./UpcomingEvents";
import AcademicCaleder from "../../../assets/Academics/academic-calendar.png";

const AcademicCalender = () => {
  return (
    <div id="academicCalender" className="bg-gray-50 px-4 md:px-14 lg:px-24 xl:px-40 py-24 flex flex-col">
      <div className="flex flex-col md:flex-row items-start justify-between gap-4 md:gap-10 mb-10 md:mb-0">
        <div className="text-left">
          {/* title */}
          <h3 className="text-primary text-sm text-left uppercase font-medium">
          Academic Calendar{" "}
            <span className="text-yellow-400 font-semibold">PNTC</span>
          </h3>
          {/* Subtitle */}
          <h1 className="text-gray-700 text-3xl md:text-2xl lg:text-3xl leading-2 tracking-tight font-semibold max-w-full mt-3 mb-2 md:mb-5">
          Academic Calendar
          </h1>
        </div>
        <p className="font-normal text-base text-left md:text-right text-gray-600 max-w-lg">
        The academic calendar outlines the entire year’s schedule, including:
        </p>
      </div>
      <div className="flex flex-col items-stretch md:flex-row md:items-start justify-between gap-4">
        <div className="bg-blue-100 rounded-3xl overflow-hidden md:max-w-[50%]">
          <img src={AcademicCaleder} className="w-full object-cover" alt="Academic Calender" />
        </div>
        <UpcomingEvents/>
      </div>
    </div>
  );
};

export default AcademicCalender;

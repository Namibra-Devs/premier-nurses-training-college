import React from "react";
import missionImg from "../../assets/sections/n1.jpg";
import KeyStatistics from "../UtilityComponents/KeyStatistics";
import Totals from "../UtilityComponents/Totals";
import KeyStatisticsII from "../UtilityComponents/KeyStatisticsII";

const MissionStatement = () => {
  return (
    <>
      <div id="totals" className="bg-gray-50 px-4 md:px-40 mt-1 flex justify-center items-center">
        <Totals />
      </div>
      <div id="missionStatement" className="bg-gray-50 px-4 md:px-14 py-24">
        <div className="flex flex-col md:flex-row md:items-center justify-center gap-10">
          <div className="mission-img max-w-full md:max-w-[30%] relative overflow-hidden group">
            <img
              src={missionImg}
              alt=""
              className="w-full rounded-3xl group-hover:brightness-75 duration-700 ease-linear"
            />
            <h4
              className="absolute bottom-4 text-white font-medium text-lg m-5 
            leading-tight translate-x-1 opacity-0 group-hover:opacity-100 duration-700 ease-linear transform group-hover:translate-y-2"
            >
              Empowering compassionate healthcare professionals through
              innovative education, practical training, and a commitment to
              excellence.
            </h4>
          </div>
          <div className="mission-right md:max-w-[50%] mt-10 md:mt-0">
            {/* title */}
            <h3 className="text-primary text-sm text-left uppercase font-medium">
              Mission Statement
            </h3>
            {/* Subtitle */}
            <h1 className="text-gray-700 text-3xl md:text-2xl xl:text-3xl leading-2 tracking-tight font-semibold max-w-xl my-3">
              Empowering healthcare professionals through innovative education
              and practical training...
            </h1>
            <p className="font-normal text-base text-gray-500 max-w-xl">
              We are dedicated to shaping the future of healthcare by educating
              and inspiring the next generation of skilled and empathetic
              nurses.
            </p>
            <br />
            <KeyStatistics />
          </div>
        </div>
      </div>
      <div className="bg-white flex justify-center items-center px-4 md:px-40 pt-2 py-24 md:py-24">
        <KeyStatisticsII />
      </div>
    </>
  );
};

export default MissionStatement;
